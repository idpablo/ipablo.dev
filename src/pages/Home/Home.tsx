import React, { useEffect, useState, useRef } from 'react';
import { Header, Footer } from '../../ui';
import { Avatar } from '../../ui/Avatar';
import { ProjectModal } from '../../ui/Modal';
import ProfileModal from '../../ui/Modal/ProfileModal';
import { Project } from '../../core/types';
import { GITHUB_API } from '../../constants';
import { HomeStyled, DashboardContainer, DashboardInfo, DashboardProjects } from './Home.styles';
import { ProjectCard } from '../../ui/Card';
import avatarImg from '../../assets/avatar.webp';
import { useLanguage } from '../../core/i18n';
import { cacheManager } from '../../utils/cache';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      // Tenta recuperar do cache primeiro (24 horas de TTL)
      const cachedProjects = cacheManager.get<Project[]>('github_projects');
      if (cachedProjects) {
        setProjects(cachedProjects);
        return;
      }

      // Se não houver cache, busca da API
      try {
        const response = await fetch(GITHUB_API.getReposUrl(GITHUB_API.USER));
        if (response.ok) {
          const data = await response.json();
          cacheManager.set('github_projects', data, 24); // Cache por 24 horas
          setProjects(data);
        }
      } catch (error) {
        // Erro silencioso em produção
        console.warn('Erro ao buscar projetos do GitHub:', error);
      }
    };

    fetchGitHubProjects();
  }, []);

  const handleProjectClick = (project: Project, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const element = projectsRef.current;
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

  return (
    <>
      <HomeStyled>
        <Header />
        <DashboardContainer>
          <DashboardInfo>
            <div onClick={() => setIsProfileModalOpen(true)} style={{ cursor: 'pointer' }}>
              <Avatar src={avatarImg} alt="Pablo Bento Soares" size="160px" />
            </div>
            <h2>{t.home.title}</h2>
            <p>
              {t.home.description1}
            </p>
            <p>
              {t.home.description2}
            </p>
            <p style={{ fontSize: '1.3rem', fontWeight: 600, marginTop: '1rem' }}>
              {t.home.devopsMessage}
            </p>
          </DashboardInfo>
          <DashboardProjects ref={projectsRef}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                as="button"
                onClick={(e: any) => handleProjectClick(project, e)}
                style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
              >
                <h4>{project.name}</h4>
                <p>{project.description || 'Sem descrição disponível'}</p>
                {project.language && <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>📌 {project.language}</p>}
              </ProjectCard>
            ))}
            {projects.map((project) => (
              <ProjectCard
                key={`${project.id}-duplicate`}
                as="button"
                onClick={(e: any) => handleProjectClick(project, e)}
                style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
              >
                <h4>{project.name}</h4>
                <p>{project.description || 'Sem descrição disponível'}</p>
                {project.language && <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>📌 {project.language}</p>}
              </ProjectCard>
            ))}
          </DashboardProjects>
        </DashboardContainer>
        <Footer />
      </HomeStyled>
      <ProjectModal isOpen={isModalOpen} project={selectedProject} onClose={handleCloseModal} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </>
  );
};

export default HomePage;
