import Head from 'next/head';

export interface HeadProps {
	title: string;
	description: string;
	lang?: string;
	keywords?: string[];
	author?: string;
	image?: string;
	meta?: Array<{
		name: string;
		content: string;
	}>;
}

const SeoHead = ({
	title,
	description,
	author = 'Rajesh Royal',
	keywords,
	image = 'https://res.cloudinary.com/dkvwzwfoo/image/upload/v1668145152/Senior-Software-Engineer-and-Consultant-Rajesh-Royal_c5sycz.png',
	meta,
}: HeadProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:type" content="website" />
			<meta name="og:url" content="https://rajeshroyal.com/" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:creator" content={author} />
			{meta &&
				meta.length > 0 &&
				meta.map(({ name, content }) => (
					<meta name={name} content={content} key={name} />
				))}
			{image && <meta name="og:image" content={image} />}
			{image && <meta name="twitter:image" content={image} />}
			{keywords && <meta name="keywords" content={keywords.join(', ')} />}
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@type":"WebSite","name":"Rajeshroyal.com","alternateName":"Rajesh Royal","url":"https://rajeshroyal.com/","description":"Front-End Software Engineer with a focus on React.js and TypeScript. I have more than 5 years experience working in software engineering.","image":"${image}"}`,
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{
  "@context": "http://schema.org",
  "@type": "Person",
  "image": "https://res.cloudinary.com/dkvwzwfoo/image/upload/v1668145312/rajesh-royal_k6iqgo.png",
  "name": "Rajesh Royal",
  "alternateName": "Rajesh",
  "url": "https://rajeshroyal.com/",
  "jobTitle": [
    "Senior Software Engineer",
    "Frontend Engineer",
    "Front-End Developer",
    "Web Developer"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Senior Software Engineer",
    "occupationLocation": {
      "@type": "City",
      "name": "Ajmer"
    },
    "estimatedSalary": [
      {
        "@type": "MonetaryAmountDistribution",
        "name": "base",
        "currency": "GBP",
        "duration": "P1H",
        "percentile10": "74",
        "percentile25": "80",
        "median": "90",
        "percentile75": "100",
        "percentile90": "106"
      }
    ],
    "description": "Develops web applications and websites using JavaScript, React and HTML5.",
    "skills": "HTML5, CSS, JavaScript, React, PHP, Sass, Less, Node.js, Express.js, Vue.js, Gatsby, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, Joomla, Drupal, E-Commerce",
    "alternateName": [
      "Frontend Developer",
      "Full Stack Developer",
      "Frontend Engineer"
    ],
    "responsibilities": [
      "App Development",
      "Web Design",
      "Website Development",
      "JavaScript Development",
      "WordPress Development",
      "CMS Development",
      "Frontend Development",
      "Full Stack Development",
      "Online Marketing",
      "SEO Services",
      "Web Developer",
      "Website Maintenance"
    ]
  },
  "sameAs": [
    "https://www.linkedin.com/in/rajesh-royal",
    "http://twitter.com/Raj_896",
    "https://github.com/rajesh-royal",
    "https://instagram.com/rajesh.royal"
  ],
  "brand": [
    {
      "@type": "Brand",
      "name": "Software Engineer",
      "alternateName": "Front-End Engineer"
    },
    {
      "@type": "Brand",
      "name": "Rajesh-Royal",
      "alternateName": "Rajesh Royal"
    }
  ],
  "memberOf": [
    {
      "@type": "Organization",
      "url": "https://rajeshroyal.com/",
      "name": "Vanilacodes Ltd",
      "alternateName": "Vanilacodes Agency"
    },
    {
      "@type": "Organization",
      "url": "https://rajeshroyal.com/",
      "name": "Rajesh Royal",
      "alternateName": "Rajesh"
    }
  ],
  "homeLocation": {
    "@type": "City",
    "name": "Ajmer"
  },
  "owns": {
    "@type": "Organization",
    "url": "https://rajeshroyal.com/",
    "name": "Vanilacodes Ltd",
    "alternateName": "Creativ Software development Agency",
    "sameAs": "https://rajeshroyal.com/"
  },
  "alumniOf": {
    "@type": "Organization",
    "url": "https://www.rtu.ac.in/index/",
    "name": "Rajasthan Technical University"
  },
  "nationality": {
    "@type": "Country",
    "name": "India"
  }
}`,
				}}
			/>
		</Head>
	);
};

export { SeoHead };
