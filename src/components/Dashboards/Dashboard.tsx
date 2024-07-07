import React, { useEffect, useState } from "react";
import { DashboardContainer, DashboardProjects, DashboardInfo, DashboardCard, LinkStyled } from '../../theme/Theme';

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/idpablo/repos");
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

  return (
    <DashboardContainer>
      <DashboardProjects>
        {projects.map((project) => (
          <DashboardCard key={project.id}>
            <h4>{project.name}</h4>
            <br />
            <p>{project.description}</p>
            <LinkStyled href={project.html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</LinkStyled>
          </DashboardCard>
        ))}
      </DashboardProjects>
      <DashboardInfo>
        <h2>Meu Nome é Pablo Bento Soares</h2>
        <br />
        <p>
          Sou um desenvolvedor de software que teve o início da carreira na infraestrutura, experiência em scripts de automação, servidores e estruturas de escalabilidade e monitoramento, dando ênfase nas linguagens; Java, Python e JavaScript. Uma pessoa que ama a tecnologia desde que me entendo por gente, sempre criando meus brinquedinhos e desafios pessoais, como fazer alguns bots, customização do sistema Android e scripting para pagar minhas contas. Não tenho medo de abrir a documentação de uma linguagem aleatória no final de semana para fazer alguma implementação "boba". Estudo paradigmas e estruturas de algoritmo que nunca vou usar novamente. Me encontro encantado com o mundo das IA's e dou ênfase na matemática e estatística envolvida em treinamento das mesmas.
        </p>
        <p>
          #DevOPS é cultura.
        </p>
      </DashboardInfo>
    </DashboardContainer>
  );
};

export default Dashboard;
