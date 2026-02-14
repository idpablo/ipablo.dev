import React, { useEffect, useState } from 'react';
import { Header, Footer } from '../../ui';
import { Avatar } from '../../ui/Avatar';
import { ProjectModal } from '../../ui/Modal';
import ProfileModal from '../../ui/Modal/ProfileModal';
import { Project } from '../../core/types';
import { GITHUB_API } from '../../constants';
import { HomeStyled, DashboardContainer, DashboardInfo } from './Home.styles';
import ProjectCardCarousel from '../../ui/Card/ProjectCardCarousel';
import avatarImg from '../../assets/avatar.webp';
import { useLanguage } from '../../core/i18n';
import { cacheManager } from '../../utils/cache';
import { CACHE_KEYS, CACHE_TTL } from '../../utils/cacheConfig';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      const cachedProjects = cacheManager.get<Project[]>(CACHE_KEYS.GITHUB_PROJECTS);
      if (cachedProjects) {
        setProjects(cachedProjects);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(GITHUB_API.getReposUrl(GITHUB_API.USER));
        if (response.ok) {
          const data = await response.json();
          cacheManager.set(CACHE_KEYS.GITHUB_PROJECTS, data, CACHE_TTL.API_DATA);
          setProjects(data);
        }
      } catch {
        console.log('GitHub API fetch failed');
        setProjects([]);
      } finally {
        setIsLoading(false);
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
          <ProjectCardCarousel
            projects={projects}
            onProjectClick={handleProjectClick}
            isLoading={isLoading}
            loadingMessage={t.home.loadingMessage}
          />
        </DashboardContainer>
        <Footer />
      </HomeStyled>
      <ProjectModal isOpen={isModalOpen} project={selectedProject} onClose={handleCloseModal} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </>
  );
};

export default HomePage;

