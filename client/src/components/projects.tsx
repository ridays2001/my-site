import React from 'react';
import ProjectSection from '../assets/styles/projectSection';
import { BackEnd, FrontEnd } from '../util/icons';
import projects from '../util/projectsData';

type Props = {
	dark: boolean;
	className: string;
	feat: boolean;
};

const ListProjects = ({ className, dark, feat }: Props) => (
	<ProjectSection className={className} dark={dark ? 1 : 0}>
		<h2 style={{ marginTop: '10vh' }}>My Projects:</h2>
		<div className='row row-cols-1 row-cols-md-2 row-cols-xxl-4 align-items-start justify-content-center'>
			{projects
				.filter((project) => (feat ? project.featured : true))
				.map(({ back, description, front, github, tech, timeline, name }) => (
					<div className='d-flex col align-self-stretch' key={name}>
						<div className='card w-100'>
							<div className='card-body text-start'>
								<div className='card-title'>{name}</div>
								<div className='card-subtitle mb-3 text-end'>{timeline}</div>
								<div className='card-text'>{description}</div>
							</div>
							<ul className='list-group list-group-flush text-start'>
								<li className='list-group-item text-center' key='made-with'>
									Tech: {tech}
								</li>
								<li className='list-group-item' key='front'>
									<FrontEnd dark={dark} /> Front End:
									<br />
									{front}
								</li>
								<li className='list-group-item' key='back'>
									<BackEnd dark={dark} /> Back End:
									<br />
									{back}
								</li>
								<li className='list-group-item links' key='gh'>
									<a href={github}>GitHub ↗</a>
								</li>
							</ul>
						</div>
					</div>
				))}
		</div>
	</ProjectSection>
);

export default ListProjects;
