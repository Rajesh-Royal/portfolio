import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import Typed from 'react-typed';

import LogoCypress from 'Public/assets/tools/cypress.svg';
import LogoFigma from 'Public/assets/tools/figma.svg';
import LogoGraphql from 'Public/assets/tools/graphql.svg';
import LogoHygraph from 'Public/assets/tools/hygraph.svg';
import LogoNext from 'Public/assets/tools/nextjs.svg';
import LogoStorybook from 'Public/assets/tools/storybook.svg';
import LogoVercel from 'Public/assets/tools/vercel.svg';
import ExpressJsLogo from 'Public/assets/tools/expressjs.svg';
import MongoDBLogo from 'Public/assets/tools/mongodb.svg';
import NodejsLogo from 'Public/assets/tools/nodejs.svg';

const IndexPage = () => {
	const talkAbout = [
		'React',
		'JavaScript',
		'TypeScript',
		'GraphQL',
		'Redux',
		'Jamstack',
		'Next.js',
		'RESTful APIs',
		'HTML',
		'CSS',
		'Gatsby',
		'Svelte',
	];

	return (
		<AnimatePage>
			<SeoHead
				title="Senior Software Engineer and Consultant – Rajesh Royal"
				description="A Front-End Software Engineer with a focus on JavaScript and React. I have more than 5 years experience working in software engineering and consulting."
				keywords={[
					'Software Engineer',
					'Rajesh Royal',
					'Software Consulting',
					'Front-End',
					'Full-Stack',
					'React',
					'TypeScript',
					'JavaScript',
					'GraphQL',
					'CSS',
					'Tailwind',
				]}
			/>
			<section id="home" className="h-full">
				<Container>
					<h1 className="headline mt-20 text-3xl md:text-5xl lg:text-6xl">
						Hey, I&apos;m Rajesh Royal 👋
					</h1>
					<p className="my-8 text-lg">
						I am a passionate Software Engineer, specialised in front-end
						development using React and TypeScript. I design and code
						beautifully simple things, and I love what I do. I also enjoy
						building new things, contributing to the open-source community, and
						continuously learning. You can talk to me about{' '}
						<Typed
							loop
							typeSpeed={80}
							backSpeed={20}
							strings={talkAbout}
							smartBackspace
							backDelay={1000}
							loopCount={0}
							showCursor
							cursorChar="|"
						/>
						.
					</p>
					<p>
						P.S. this website is open-source and available on{' '}
						<a
							href="https://github.com/jakeherp/portfolio"
							title="Link to Github repository"
							target="_blank"
							rel="noopener noreferrer"
							className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0"
						>
							Github
						</a>
						.
					</p>
				</Container>
			</section>
			<section id="tools" className="my-40">
				<Container>
					<h2 className="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
						Some of my favourite tools
					</h2>

					<div className="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8">
						<LogoNext className="w-32" aria-label="Next.js" />
						<LogoHygraph className="w-28 md:w-36" aria-label="Hygraph" />
						<LogoStorybook className="w-32 md:w-40" aria-label="Storybook" />
						<LogoGraphql className="w-28 md:w-36" aria-label="GraphQL" />
						<MongoDBLogo className="w-28 md:w-36" aria-label="GraphQL" />
						<NodejsLogo className="w-16 md:w-18" aria-label="GraphQL" />
						<ExpressJsLogo className="w-28 md:w-36" aria-label="GraphQL" />
						<LogoVercel className="w-32 md:w-36" aria-label="Vercel" />
						<LogoFigma className="w-8" aria-label="Figma" />
						<LogoCypress className="w-32 md:w-40" aria-label="Cypress" />
					</div>
				</Container>
			</section>
			<section id="services">
				<Container>
					<h2 className="headline mt-20 text-2xl md:text-4xl lg:text-5xl">
						Services I provide
					</h2>
					<p className="font-bold text-xl md:text-2xl mt-2">
						as a software architect with a passion for creating applications and
						websites that people love.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Software Consultancy
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I find the right tech stack for your project, scale your team and
						work with you every step of the way.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I love working with startups and established businesses to find the
						right tech stack, be it a single new feature or a whole rebuild of
						your current product. I can help you find the perfect developers for
						your project and scale up as your business grows.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						When it comes to application development, I&apos;ve seen it all.
						From building highly customised enterprise software stacks on the
						latest open source frameworks to reducing costs and improving user
						experience with cloud-based solutions.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I offer consulting services for companies and agencies that strive
						to develop scalable and performant web solutions. Deeply knowing my
						customers&apos; needs, I can help them make the right decision when
						it comes to deciding on a software architecture and tech stack.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Website & App Development
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I build web applications and websites that are well-designed,
						accessible, and performant.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I&apos;ve been building websites and apps for over 15 years now,
						working with clients from startups to large enterprise businesses. I
						like to focus on accessibility, performance, and clean code.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						As a web and mobile development consultant, I help my clients create
						the best possible digital products for their businesses. I
						don&apos;t just develop websites and apps, I make them beautiful,
						fast and accessible to people with disabilities. My goal is to work
						with you to help you reach your full potential.
					</p>

					<h3 className="headline mt-20 text-xl md:text-2xl lg:text-4xl">
						Accessibility Audit
					</h3>
					<p className="text-xl mt-4 md:text-xl lg:text-2xl">
						I audit your website or app for accessibility, identify problems,
						and help you fix them.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						Looking for an experienced accessibility auditor? I&apos;ll help you
						identify issues, prioritise them for resolution, provide
						recommendations on how to fix them and keep your site compliant. See
						some examples of my work below.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						I audit existing websites and apps for accessibility, which helps
						determine how they can be improved to meet WCAG best practices. My
						auditing process includes a detailed methodology and reporting. An
						accessibility audit is recommended before launching new products or
						major updates to existing websites and apps.
					</p>
					<p className="mt-4 mb-4 text-lg leading-7">
						As an accessibility auditor, I audit existing websites and apps for
						accessibility. I shed light on why things are inaccessible, and help
						change that. What you&apos;ll gain is a better understanding of how
						users with disabilities interact with your product, what traits make
						for effective interfaces for people with disabilities and insight in
						how to design these interfaces going forward.
					</p>
				</Container>
			</section>
		</AnimatePage>
	);
};

export default IndexPage;
