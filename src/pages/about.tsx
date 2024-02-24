import { IEducation, IJob, IPodcast } from '@types';

import { gql } from '@apollo/client';
import { client } from 'apollo-client';
import { NextPage } from 'next';
import { mapEducation } from 'Utils/mappings/mapEducation';
import { mapJobs } from 'Utils/mappings/mapJobs';
import { mapPodcasts } from 'Utils/mappings/mapPodcasts';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { Icon } from 'Atoms/Icon';
import { SeoHead } from 'Atoms/SeoHead';
import { PodcastList } from 'Molecules/PodcastList';
import { Education } from 'Organisms/Education';
import { WorkExperience } from 'Organisms/WorkExperience';

interface IProps {
	podcasts: IPodcast[];
	jobs: IJob[];
	education: IEducation[];
}

const AboutPage: NextPage<IProps> = ({ podcasts, jobs, education }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="About Rajesh Royal, a Senior Software Engineer and Consultant in India"
				description="As a passionate front-end software developer, I create amazing websites and web apps to make the internet a better place."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hey, I&apos;m Rajesh Royal
				</h1>
				<h2 className="font-bold text-xl md:text-2xl mt-2">
					Senior Software Engineer from India
				</h2>
				<p className="mt-8">
					As a passionate front-end developer, I create amazing websites and web
					apps and I enjoy building new things and contributing to the
					open-source community, and continuously learning. I&apos;m quietly
					confident, naturally curious, and perpetually working on improving my
					chops one problem at a time. I&apos;m a Full Stack JavaScript
					Developer who has done his major in frontend.
				</p>
				<p className="my-4">
					I am 25 years old and have been a web developer for the last 6 years.
					The technologies I work with are JavaScript, HTML5, and CSS3 with a
					focus on the frameworks React.js, Next.js, Nuxt.js, Node, MongoDB and
					Express. I use code not only to do my day-to-day job but also to solve
					everyday problems I come across. I have published some really good{' '}
					<a
						href="https://www.npmjs.com/~rajesh896"
						target={'_blank'}
						rel="noreferrer"
						className="underline"
					>
						open-source libraries to NPM.
					</a>
				</p>
				<p>
					When I am not writing code I love to spend time with my friends and
					family at home in Ajmer or traveling around the country. I speak three
					languages (some better than others). Furthermore, I enjoy cooking,
					outdoor sports mostly basketball, and riding my RE bullet.
				</p>
				<h2 className="headline mt-12 mb-4 text-4xl">Podcasts I enjoy</h2>

				<PodcastList podcasts={podcasts} />

				<h2 className="headline mt-12 mb-4 text-4xl">Experience</h2>

				<WorkExperience jobs={jobs} />

				<h2 className="headline mt-12 mb-4 text-4xl">Education</h2>
				<p className="mb-6">
					I am mostly self-taught, but here is the list of universities that I
					attended
				</p>

				<Education education={education} />

				<div className="flex justify-center mt-8">
					<Button
						href="https://www.linkedin.com/in/rajesh-royal"
						download={true}
						className="group flex gap-2 whitespace-nowrap"
						target="_blank"
					>
						<div className="w-6 text-blue-500 group-hover:text-off-white dark:text-purple-500">
							<Icon icon="DOWNLOAD" />
						</div>
						<div className="block headline group-hover:text-off-white">
							Download my CV
						</div>
					</Button>
				</div>
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query AboutPageQuery {
				podcasts(orderBy: publishedAt_ASC) {
					id
					name
					url
					logo {
						url
					}
				}
				jobs(orderBy: fromDate_DESC) {
					id
					jobTitle
					fromDate
					toDate
					description {
						raw
					}
					company {
						name
						url
						logo {
							url
						}
					}
					skills {
						skill
					}
				}
				educations(orderBy: date_DESC) {
					id
					course
					date
					courseContents {
						skill
					}
					institute {
						name
						url
						logo {
							url
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			podcasts: mapPodcasts(data.podcasts),
			education: mapEducation(data.educations),
			jobs: mapJobs(data.jobs),
		},
	};
}

export default AboutPage;
