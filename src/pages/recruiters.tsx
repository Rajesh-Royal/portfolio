import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';
import { client } from 'apollo-client';
import { NextPage } from 'next';
import { useState } from 'react';
import { mdxComponents } from 'Utils/mdxComponents';

import { AnimatePage } from 'Atoms/AnimatePage';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';
import { RecruiterForm } from 'Molecules/RecruiterForm';
import { Salary } from 'Molecules/Salary';

interface IProps {
	markdown: RichTextContent;
	references: any;
	salary: {
		minimum: number;
		median: number;
		maximum: number;
	};
}

const RecruitersPage: NextPage<IProps> = ({ markdown, references, salary }) => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async (
		formValues: Record<string, string>,
		setSubmitting: (arg: boolean) => void,
		resetForm: () => void
	) => {
		setError(false);
		setSuccess(false);

		const res = await fetch('/api/signup', {
			body: JSON.stringify(formValues),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const { error } = await res.json();

		if (error) {
			setError(true);
			console.error('Mailchimp Error:', error);
			setSubmitting(false);
			return;
		}

		setSubmitting(false);
		setSuccess(true);
		resetForm();
	};

	return (
		<AnimatePage>
			<SeoHead
				title="Recruiter Information about Rajesh Royal"
				description="Thank you for your interest in me for software engineering roles you are hiring for."
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl mt-8">
					Hi, I&apos;m Jacob!
				</h1>
				<h2 className="headline text-xl md:text-2xl lg:text-3xl">
					Nice to meet you.
				</h2>
				<RichText
					content={markdown}
					references={references}
					renderers={{
						...mdxComponents,
						embed: {
							Salary: () => <Salary salaryRange={salary} />,
						},
					}}
				/>

				<RecruiterForm
					handleSubmit={handleSubmit}
					success={success}
					error={error}
				/>
			</Container>
		</AnimatePage>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			query RecruitersPageQuery {
				page(where: { slug: "recruiters" }) {
					content {
						raw
						references {
							__typename
							... on Salary {
								id
							}
						}
					}
				}
				salary(where: { id: "cla56m7eh34c70co7eo7ziq4f" }) {
					minimum
					median
					maximum
				}
			}
		`,
	});

	return {
		props: {
			markdown: data.page.content.raw,
			references: data.page.content.references || {},
			salary: data.salary,
		},
	};
}

export default RecruitersPage;
