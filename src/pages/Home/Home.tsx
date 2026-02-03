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

const HomePage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch(GITHUB_API.getReposUrl(GITHUB_API.USER));
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error('Erro ao buscar projetos do GitHub:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao buscar projetos do GitHub:', error);
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
            <h2>Meu Nome é Pablo Bento Soares</h2>
            <p>
              Sou um desenvolvedor de software que teve o início da carreira na infraestrutura, experiência em scripts de automação, servidores e estruturas de escalabilidade e monitoramento, dando ênfase nas linguagens; Java, Python e JavaScript. Uma pessoa que ama a tecnologia desde que me entendo por gente, sempre criando meus brinquedinhos e desafios pessoais, como fazer alguns bots, customização do sistema Android e scripting para pagar minhas contas.
            </p>
            <p>
              Não tenho medo de abrir a documentação de uma linguagem aleatória no final de semana para fazer alguma implementação "boba". Estudo paradigmas e estruturas de algoritmo que nunca vou usar novamente. Me encontro encantado com o mundo das IA's e dou ênfase na matemática e estatística envolvida em treinamento das mesmas.
            </p>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, marginTop: '1rem' }}>
              #DevOPS é cultura.
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
