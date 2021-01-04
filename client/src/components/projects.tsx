import React from 'react';
import ProjectSection from '../assets/styles/projectSection';
import { BackEnd, FrontEnd } from '../util/icons';
import projects from '../util/projectsData';

type Props = {
	dark: boolean;
	className: string;
};

const Projects = ({ className, dark }: Props) => (
	<ProjectSection className={className} dark={dark ? 1 : 0}>
		<h2 style={{ marginTop: '10vh' }}>Projects that I worked on</h2>
		<div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 align-items-start'>
			{projects.map(({ back, description, front, github, tech, timeline, name, status }) => (
				<div className='col' key={name}>
					<div className='card'>
						<div className='card-body text-start'>
							<div className='card-title'>{name}</div>
							<div className='card-subtitle mb-3 text-end'>{timeline}</div>
							<div className='card-text'>{description}</div>
						</div>
						<ul className='list-group list-group-flush text-start'>
							<li className='list-group-item text-center' key='made-with'>
								Made With: {tech}
							</li>
							<li className='list-group-item' key='status'>
								{status}
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

export default Projects;
