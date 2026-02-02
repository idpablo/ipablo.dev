import React, { useEffect, useState, useRef } from "react";
import { DashboardContainer, DashboardProjects, DashboardInfo, DashboardCard } from '../../theme/Theme';
import Avatar from '../Avatar/Avatar';
import userAvatar from '../../theme/assets/ipablo.dev.webp';

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/idpablo/repos?sort=updated&per_page=6");
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error("Erro ao buscar projetos do GitHub:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar projetos do GitHub:", error);
      }
    };

    fetchGitHubProjects();
  }, []);

  useEffect(() => {
    const element = projectsRef.current;
    if (!element || projects.length === 0) return;

    // Posicionar o scroll no meio para permitir loop infinito em ambas direções.
    // Aguarda um pequeno delay para garantir que imagens/DOM tenham estabilizado.
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

      // If we've scrolled into the last part of the duplicated content, jump back by one set
      if (scrollTop + clientHeight >= totalHeight - buffer) {
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          element.scrollTop = scrollTop - singleSetHeight;
        }, 0);
        return;
      }

      // If we've scrolled into the first part (near top), jump forward by one set
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
    <DashboardContainer>
      <DashboardInfo>
        <Avatar src={userAvatar} alt="User Avatar" size="160px" />
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
      <DashboardProjects 
        ref={projectsRef}
      >
        {projects.map((project) => (
          <DashboardCard key={project.id} href={project.html_url} target="_blank" rel="noopener noreferrer">
            <h4>{project.name}</h4>
            <p>{project.description || "Sem descrição disponível"}</p>
            {project.language && <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>📌 {project.language}</p>}
          </DashboardCard>
        ))}
        {projects.map((project) => (
          <DashboardCard key={`${project.id}-duplicate`} href={project.html_url} target="_blank" rel="noopener noreferrer">
            <h4>{project.name}</h4>
            <p>{project.description || "Sem descrição disponível"}</p>
            {project.language && <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>📌 {project.language}</p>}
          </DashboardCard>
        ))}
      </DashboardProjects>
    </DashboardContainer>
  );
};

export default Dashboard;
