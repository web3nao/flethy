import { flow, Instance, types } from 'mobx-state-tree'
import {
	WorkflowTutorial,
	WORKFLOW_STARTER,
	WORKFLOW_TUTORIALS,
} from '../../constants/tutorials.const'
import { WorkflowDataModel } from '../../models/api/workflows'
import { FlethyContext } from '../../models/flethy.types'
import { getRootStore, getRouter } from '../../models/helpers'
import routes from '../../routes'

export const WorkflowEditorPage = types
	.model('WorkflowEditorPage', {
		context: types.optional(FlethyContext, {}),
		workflowId: types.optional(types.string, ''),
		name: types.optional(types.string, ''),
		workflow: types.optional(types.string, ''),
		envs: types.array(
			types.model({
				id: types.string,
				key: types.optional(types.string, ''),
				value: types.optional(types.string, ''),
			}),
		),
		envsIndex: types.optional(types.number, 0),
		state: types.optional(
			types.enumeration(['idle', 'loading', 'saving']),
			'idle',
		),
	})
	.actions((self) => {
		// INITIALIZATION
		const initialisePage = flow(function* (options: {
			workflowId?: string
			workspaceId: string
			projectId: string
			tutorial?: string
		}) {
			self.state = 'loading'
			self.context.projectId = options.projectId
			self.context.workspaceId = options.workspaceId
			self.workflowId = options.workflowId || ''
			self.envsIndex = 0
			self.name = ''
			self.workflow = ''
			self.envs.clear()

			if (options.workflowId) {
				self.workflowId = options.workflowId
				const { api } = getRootStore(self)
				const workflow: Instance<typeof WorkflowDataModel> =
					yield api.workflows.get({
						workspaceId: options.workspaceId,
						projectId: options.projectId,
						workflowId: options.workflowId,
					})
				self.workflow = workflow.workflow ?? ''
				self.name = workflow.name
				if (workflow.envs) {
					for (const envKey of workflow.envs.keys()) {
						addEnv({ key: envKey, value: workflow.envs.get(envKey) ?? '' })
					}
				}
			} else if (options.tutorial) {
				const tutorial = WORKFLOW_TUTORIALS[options.tutorial]
				self.name = tutorial.name
				if (tutorial.env) {
					for (const envKey of Object.keys(tutorial.env)) {
						addEnv({ key: envKey, value: tutorial.env[envKey] })
					}
				}
				self.workflow = JSON.stringify(tutorial.workflow, null, 2)
			} else {
				self.workflow = JSON.stringify(WORKFLOW_STARTER, null, 2)
			}
			self.state = 'idle'
		})

		const updateWorkflow = (value: string) => {
			self.workflow = value
		}

		const updateName = (value: string) => {
			self.name = value
		}

		const addEnv = (params?: { key: string; value: string }) => {
			self.envs.push({
				id: `envvar-${self.envsIndex}`,
				key: params?.key || '',
				value: params?.value || '',
			})
			self.envsIndex++
		}

		const updateEnv = (params: {
			id: string
			key?: string
			value?: string
		}) => {
			const env = self.envs.find((env) => env.id === params.id)
			if (env) {
				if (params.key) {
					env.key = params.key
				}
				if (params.value) {
					env.value = params.value
				}
			}
		}

		const removeEnv = (params: { id: string }) => {
			const env = self.envs.find((env) => env.id === params.id)
			if (env) {
				self.envs.remove(env)
			}
		}

		const save = flow(function* () {
			const { api } = getRootStore(self)

			const envs: { [key: string]: string } = {}
			for (const env of self.envs) {
				envs[env.key] = env.value
			}

			const workflowId =
				self.workflowId?.length > 0 ? self.workflowId : undefined

			const response = yield api.workflows.put({
				workflowId,
				workspaceId: self.context.workspaceId,
				projectId: self.context.projectId,
				workflow: JSON.parse(self.workflow),
				name: self.name,
				env: envs,
			})

			if (!workflowId) {
				getRouter().goTo(routes.workflowExisting, {
					workflowId: response.workflowId,
					projectId: self.context.projectId,
					workspaceId: self.context.workspaceId,
				})
			}
		})

		return {
			initialisePage,
			updateWorkflow,
			save,
			updateName,
			addEnv,
			updateEnv,
			removeEnv,
		}
	})
	.views((self) => ({}))
