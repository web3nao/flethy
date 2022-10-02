import {
	Box,
	Button,
	Center,
	Collapse,
	Container,
	Flex,
	Grid,
	GridItem,
	Heading,
	IconButton,
	Image,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import Carousel, { ImageSource } from '../../components/carousel/Carousel'
import EmailSubscription from '../../components/email-subscription/EmailSubscription'
import Logo from '../../components/Logo'
import { API_COUNT } from '../../constants/api.const'
import { EXTERNAL_LINKS } from '../../constants/externallinks.const'
import { INTEGRATIONS } from '../../constants/integrations.const'
import { BOX } from '../../constants/style.const'
import { useMst } from '../../models/root'

const images: ImageSource[] = [
	{
		src: 'code-auth0.webp',
		alt: 'Code Example for auth0',
		id: 'auth0',
	},
	{
		src: 'code-supabase.webp',
		alt: 'Code Example for SupaBase',
		id: 'supabase',
	},
	{
		src: 'code-web3storage.webp',
		alt: 'Code Example for Web3.Storage',
		id: 'web3storage',
	},
]

export default observer(() => {
	const { t } = useTranslation('app')
	const {
		root: {
			pages: { home: page },
		},
	} = useMst()

	return (
		<>
			<Container maxW={'7xl'}>
				<Stack
					align={'center'}
					spacing={{ base: 8, md: 10 }}
					py={{ base: 15, md: 20 }}
					direction={{ base: 'column', md: 'row' }}
				>
					<Stack flex={1} spacing={{ base: 5, md: 10 }}>
						<Heading
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
						>
							<Text
								as={'span'}
								position={'relative'}
								_after={{
									content: "''",
									width: 'full',
									height: '30%',
									position: 'absolute',
									bottom: 1,
									left: 0,
									bg: 'flethy.orange',
									zIndex: -1,
								}}
							>
								Import once,
							</Text>
							<br />
							<Text as={'span'} color={'flethy.purple'}>
								access hundreds of endpoints!
							</Text>
						</Heading>
						<Text color={'gray.500'}>
							Imagine you can connect hundreds of API endpoints with one
							package. flethy is a zero-dependency library that lets you
							integrate with popular APIs much faster.
						</Text>
						<Stack
							spacing={{ base: 4, sm: 6 }}
							direction={{ base: 'column', sm: 'row' }}
						>
							<Button
								rounded={'full'}
								size={'lg'}
								fontWeight={'normal'}
								px={6}
								colorScheme={'orange'}
								bg={'flethy.orange'}
								_hover={{ bg: 'flethy.purple' }}
								onClick={() =>
									window.open(EXTERNAL_LINKS.FLETHY_CONNECTORS_NPM)
								}
							>
								Get started
							</Button>
							{/* <Button rounded={'full'} size={'lg'} fontWeight={'normal'} px={6}>
							How It Works
						</Button> */}
						</Stack>
					</Stack>
					<Flex
						flex={1}
						justify={'center'}
						align={'center'}
						position={'relative'}
						w={'full'}
					>
						<Box
							position={'relative'}
							// height={'300px'}
							rounded={'2xl'}
							boxShadow={'2xl'}
							width={'full'}
							overflow={'hidden'}
						>
							<Image
								alt={'Code Example'}
								fit={'cover'}
								align={'center'}
								w={'100%'}
								// h={'100%'}
								src={'/code-auth0.webp'}
							/>
						</Box>
					</Flex>
				</Stack>
			</Container>
			<Container maxW={'7xl'}>
				<Stack
					align={'center'}
					spacing={{ base: 8, md: 10 }}
					direction={{ base: 'column', md: 'row' }}
				>
					<Flex
						flex={1}
						justify={'center'}
						align={'center'}
						position={'relative'}
						w={'full'}
					>
						<Box
							position={'relative'}
							// height={'300px'}
							rounded={'2xl'}
							boxShadow={'2xl'}
							width={'full'}
							overflow={'hidden'}
						>
							<Image
								alt={'Code Example'}
								fit={'cover'}
								align={'center'}
								w={'100%'}
								// h={'100%'}
								src={'/code-flow-example.webp'}
							/>
						</Box>
					</Flex>
					<Stack flex={1} spacing={{ base: 5, md: 10 }}>
						<Heading
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
						>
							<Text
								as={'span'}
								position={'relative'}
								_after={{
									content: "''",
									width: 'full',
									height: '30%',
									position: 'absolute',
									bottom: 1,
									left: 0,
									bg: 'flethy.orange',
									zIndex: -1,
								}}
							>
								Design the flow,
							</Text>
							<br />
							<Text as={'span'} color={'flethy.purple'}>
								and let the engine do the rest.
							</Text>
						</Heading>
						<Text color={'gray.500'}>
							Go a step further and design flows that make use of the ease of
							the above explained connectors. Use sequences, parallel and
							conditional paths and mappings of variables to embed as little as
							possible in code.
						</Text>
						<Stack
							spacing={{ base: 4, sm: 6 }}
							direction={{ base: 'column', sm: 'row' }}
						>
							<Button
								rounded={'full'}
								size={'lg'}
								fontWeight={'normal'}
								px={6}
								colorScheme={'orange'}
								bg={'flethy.orange'}
								_hover={{ bg: 'flethy.purple' }}
								onClick={() => window.open(EXTERNAL_LINKS.FLETHY_FLOW_NPM)}
							>
								Get started
							</Button>
							{/* <Button rounded={'full'} size={'lg'} fontWeight={'normal'} px={6}>
							How It Works
						</Button> */}
						</Stack>
					</Stack>
				</Stack>
			</Container>
			<Container maxW={'7xl'}>
				<Stack
					align={'center'}
					spacing={{ base: 8, md: 10 }}
					py={{ base: 15, md: 20 }}
					direction={{ base: 'column', md: 'row' }}
				>
					<Stack flex={1} spacing={{ base: 5, md: 10 }}>
						<Heading
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
						>
							<Text
								as={'span'}
								position={'relative'}
								_after={{
									content: "''",
									width: 'full',
									height: '30%',
									position: 'absolute',
									bottom: 1,
									left: 0,
									bg: 'flethy.orange',
									zIndex: -1,
								}}
							>
								Deploy,
							</Text>
							<br />
							<Text as={'span'} color={'flethy.purple'}>
								and relax!
							</Text>
						</Heading>
						<Text color={'gray.500'}>
							If you don't want to run your flows yourself, you can leave it to
							us. Design, deploy, start! We are currently working on making the
							product available. Subscribe to our newsletter to stay up to date
							on this!
						</Text>
					</Stack>
					<Flex
						flex={1}
						justify={'center'}
						align={'center'}
						position={'relative'}
						w={'full'}
					>
						<Box
							position={'relative'}
							// height={'300px'}
							rounded={'2xl'}
							boxShadow={'2xl'}
							width={'full'}
							overflow={'hidden'}
						>
							<Image
								alt={'Code Example'}
								fit={'cover'}
								align={'center'}
								w={'100%'}
								// h={'100%'}
								src={'/flowdesigner.webp'}
							/>
						</Box>
					</Flex>
				</Stack>
			</Container>
			<Container maxW={'7xl'} id="email-subscription">
				<Stack
					align={'center'}
					spacing={{ base: 8, md: 10 }}
					direction={{ base: 'column', md: 'row' }}
				>
					<Stack flex={1} spacing={{ base: 5, md: 10 }}>
						<Heading
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
						>
							<Text
								as={'span'}
								position={'relative'}
								_after={{
									content: "''",
									width: 'full',
									height: '30%',
									position: 'absolute',
									bottom: 1,
									left: 0,
									bg: 'flethy.orange',
									zIndex: -1,
								}}
							>
								Subscribe,
							</Text>
							<br />
							<Text as={'span'} color={'flethy.purple'}>
								to get the latest news!
							</Text>
						</Heading>
					</Stack>
					<EmailSubscription />
				</Stack>
			</Container>
		</>

		// <Center>
		// 	<Stack textAlign={'center'}>
		// 		<Logo marginTop="5em" width="100px" />
		// 		<Center>
		// 			<Box
		// 				padding={'2em'}
		// 				background={'flethy.bannerbg'}
		// 				width={{ base: '100vw', md: 'calc(100vw - 15px)' }}
		// 			>
		// 				<Heading as="h1" size="lg" mb={4}>
		// 					{t('title')}
		// 				</Heading>
		// 				<Text>{t('description')}</Text>
		// 				<Text mb={2}>{t('home.stayTuned')}</Text>
		// 				<EmailSubscription />
		// 			</Box>
		// 		</Center>
		// 		<Center>
		// 			<Container>
		// 				<Carousel images={images} />
		// 				<Heading as="h1" size="lg">
		// 					{API_COUNT} {t('home.integrations')}
		// 				</Heading>
		// 				<Box mt={'3rem'} mb={'3rem'}>
		// 					<Collapse startingHeight={500} in={page.showMore}>
		// 						<Grid
		// 							templateColumns="repeat(5, 1fr)"
		// 							gap={6}
		// 							justifyItems={'center'}
		// 							alignItems={'center'}
		// 						>
		// 							{INTEGRATIONS.map((integration) => (
		// 								<GridItem
		// 									key={integration.id}
		// 									title={integration.id}
		// 									width={{ base: '50px', md: '70px' }}
		// 									height={{ base: '50px', md: '70px' }}
		// 								>
		// 									<Center
		// 										width={'100%'}
		// 										height={'100%'}
		// 										bgColor={integration.light ? '#1A202C' : 'white'}
		// 										borderRadius={10}
		// 										borderColor="flethy.purple"
		// 										borderWidth={3}
		// 										padding={'0.5em'}
		// 									>
		// 										<Image
		// 											src={`integrations/${integration.file}`}
		// 											alt={integration.id}
		// 											maxHeight={'100%'}
		// 										/>
		// 									</Center>
		// 								</GridItem>
		// 							))}
		// 						</Grid>
		// 					</Collapse>
		// 				</Box>
		// 				<Button onClick={() => page.toggleShowMore()} mb={5}>
		// 					{page.showMore ? t('general.showLess') : t('general.showMore')}
		// 				</Button>
		// 			</Container>
		// 		</Center>
		// 	</Stack>
		// </Center>
	)
})
