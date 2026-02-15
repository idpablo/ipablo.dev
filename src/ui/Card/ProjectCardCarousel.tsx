import React, { useEffect, useRef, useState } from 'react';
import { Project } from '@core/types';
import { useLanguage } from '@core/i18n';
import { ProjectCard } from './Card.styles';
import { DashboardProjects } from '../../pages/Home/Home.styles';

interface ProjectCardCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project, e: React.MouseEvent) => void;
  isLoading?: boolean;
  loadingMessage?: string;
}

const ProjectCardCarousel: React.FC<ProjectCardCarouselProps> = ({
  projects,
  onProjectClick,
  isLoading = false,
  loadingMessage = 'Loading...',
}) => {
  const { t } = useLanguage();
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>();
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    if (!element || projects.length === 0 || isLoading || isMobile || hasInitialized) return;

    const singleSetHeight = element.scrollHeight / 2;
    const clientHeight = element.clientHeight;

    element.scrollTop = 0;

    const animateScroll = () => {
      const startTime = Date.now();
      const duration = 2000;
      const targetPosition = singleSetHeight;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOut = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        element.scrollTop = targetPosition * easeInOut;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            element.scrollTop = 0;
            setHasInitialized(true);
          }, 500);
        }
      };

      requestAnimationFrame(animate);
    };

    const initTimeout = setTimeout(animateScroll, 100);

    return () => {
      clearTimeout(initTimeout);
    };
  }, [projects.length, isLoading, isMobile, hasInitialized]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || projects.length === 0 || isLoading || isMobile) return;

    const handleScroll = () => {
      const totalHeight = element.scrollHeight;
      const singleSet = totalHeight / 2;
      const scrollTop = element.scrollTop;
      const clientHeight = element.clientHeight;
      const buffer = Math.max(50, Math.floor(clientHeight / 3));

      if (scrollTop + clientHeight >= totalHeight - buffer) {
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          element.scrollTop = scrollTop - singleSet;
        }, 0);
        return;
      }

      if (scrollTop <= buffer) {
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          element.scrollTop = scrollTop + singleSet;
        }, 0);
      }
    };

    element.addEventListener('scroll', handleScroll);
    return () => {
      element.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [projects.length, isLoading, isMobile, hasInitialized]);

  if (isLoading) {
    return (
      <DashboardProjects>
        <ProjectCard
          as="div"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '220px',
            background: 'transparent',
            border: 'none',
          }}
        >
          <p style={{ fontSize: '1rem', opacity: 0.7 }}>{loadingMessage}</p>
        </ProjectCard>
      </DashboardProjects>
    );
  }

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
