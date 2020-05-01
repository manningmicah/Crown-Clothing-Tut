import React from 'react';

import PackageInfo from 'components/package/package-info.component';
import {
	AboutContainer,
	CardContainer,
	Title,
	AboutProject,
	AboutDev,
	SectionTitle,
	ItemName,
	ItemValue,
	DetailBlock,
	Blurb,
	Linked,
} from './about.styled';

const About = () => (
	<AboutContainer>
		<Title>Project Info: </Title>
		<Blurb>
			This project is built from the Udemy Course "Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)" and has
			some additional features that I have included as a showcase to my professional experience as a Government
			Contractor, Senior JAVA developer, and 508 Specialist. I have included here all of my contact information and the
			package information for this particular application.
		</Blurb>
		<CardContainer>
			<AboutDev>
				<SectionTitle>About the Dev:</SectionTitle>
				<ItemName>Name</ItemName>
				<ItemValue>Micah Manning</ItemValue>
				<ItemName>Email</ItemName>
				<ItemValue>manningmicah@gmail.com</ItemValue>
				<ItemName>Phone Number</ItemName>
				<ItemValue>1-615-587-3082</ItemValue>
				<ItemName>Details</ItemName>
				<DetailBlock>
					At the time of this project's completion I was employed with NewWave Telecom & Technologies as a Senior Java
					Developer and Section 508/Accessibility Specialist. I was acting as the <abbr title='Section 508'>508</abbr>{' '}
					trainer and development support (Your friendly neighborhood <abbr title='Section 508'>508</abbr> Developer)
					across the entire <abbr title='Innovation Development and Operation Services'>IDOS</abbr> contract, and
					beyond. I took up learning react due to the modernization the company was pursuing with some of the projects
					in said contract. Knowing the intricacies of this technology stack lead me to being better at supporting those
					projects with my <abbr title='Section 508'>508</abbr> knowledge.
				</DetailBlock>
				<ItemName>Udemy Project Page</ItemName>
				<Linked to='https://www.udemy.com/course/complete-react-developer-zero-to-mastery/'>
					udemy.com/course/complete-react-developer-zero-to-mastery/
				</Linked>
			</AboutDev>
			<AboutProject>
				<SectionTitle>About the App:</SectionTitle>
				<PackageInfo />
				<ItemName>Docs Page Link</ItemName>
				<Linked to='https://xinous.github.io/Crown-Clothing-Tut/'>xinous.github.io/Crown-Clothing-Tut/</Linked>
			</AboutProject>
		</CardContainer>
	</AboutContainer>
);

export default About;
