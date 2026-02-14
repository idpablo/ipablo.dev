import React, { useEffect, useRef } from 'react';
import { Project } from '@core/types';
import { useLanguage } from '@core/i18n';
import { ProjectCard } from './Card.styles';
import { DashboardProjects } from '../../pages/Home/Home.styles';

interface ProjectCardCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project, e: React.MouseEvent) => void;
}

const ProjectCardCarousel: React.FC<ProjectCardCarouselProps> = ({ projects, onProjectClick }) => {
  const { t } = useLanguage();
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();
  const elementRef = useRef<HTMLDivElement>(null);

  const getProjectKey = (projectName: string): string => {
    return projectName.toLowerCase().replace(/ /g, '_').replace(/\./g, '_');
  };

  const getProjectDescription = (project: Project): string => {
    const projectKey = getProjectKey(project.name);
    if (t.projects && t.projects[projectKey]) {
      return t.projects[projectKey]?.description || project.description || '';
    }
    return project.description || '';
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element || projects.length === 0) return;

    const initTimeout = setTimeout(() => {
      const singleSetHeight = element.scrollHeight / 2;
      element.scrollTop = singleSetHeight;
    }, 100);

    const handleScroll = () => {
      const totalHeight = element.scrollHeight;
      const singleSetHeight = totalHeight / 2;
      const scrollTop = element.scrollTop;
      const clientHeight = element.clientHeight;
      const buffer = Math.max(50, Math.floor(clientHeight / 3));

      if (scrollTop + clientHeight >= totalHeight - buffer) {
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          element.scrollTop = scrollTop - singleSetHeight;
        }, 0);
        return;
      }

      if (scrollTop <= buffer) {
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          element.scrollTop = scrollTop + singleSetHeight;
        }, 0);
      }
    };

    element.addEventListener('scroll', handleScroll);
    return () => {
      element.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      clearTimeout(initTimeout);
    };
  }, [projects.length]);

  const duplicatedProjects = [...projects, ...projects];

  return (
    <DashboardProjects ref={elementRef}>
      {duplicatedProjects.map((project, index) => (
        <ProjectCard
          key={`${project.id}-${index}`}
          as="button"
          onClick={(e: React.MouseEvent) => onProjectClick(project, e)}
          style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
        >
          <h4>{project.name}</h4>
          <p>{getProjectDescription(project)}</p>
          {project.language && (
            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>
              {t.home.languageIcon} {project.language}
            </p>
          )}
        </ProjectCard>
      ))}
    </DashboardProjects>
  );
};

export default ProjectCardCarousel;
