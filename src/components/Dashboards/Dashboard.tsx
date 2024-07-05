import React from "react";

import { DashboardContainer, DashboardProjects, DashboardInfo, DashboardCard } from '../../theme/Theme';

const Dashboard: React.FC = () => {
    return (
      <DashboardContainer>
        <DashboardProjects>
        <DashboardCard>
              <h4>Project 1</h4>
              <br></br>
              <p>O Innovative Learning Portal (ILP) é uma plataforma educacional avançada projetada para transformar a experiência de aprendizado online. Combinando tecnologias de ponta, personalização inteligente e uma interface amigável, o ILP visa criar um ambiente de aprendizado dinâmico e interativo para estudantes de todas as idades e disciplinas.</p>
          </DashboardCard>
          <DashboardCard>
              <h4>Project 2</h4>
              <br></br>
              <p>O Innovative Learning Portal (ILP) é uma plataforma educacional avançada projetada para transformar a experiência de aprendizado online. Combinando tecnologias de ponta, personalização inteligente e uma interface amigável, o ILP visa criar um ambiente de aprendizado dinâmico e interativo para estudantes de todas as idades e disciplinas.</p>
          </DashboardCard>
          <DashboardCard>
              <h4>Project 3</h4>
              <br></br>
              <p>O Innovative Learning Portal (ILP) é uma plataforma educacional avançada projetada para transformar a experiência de aprendizado online. Combinando tecnologias de ponta, personalização inteligente e uma interface amigável, o ILP visa criar um ambiente de aprendizado dinâmico e interativo para estudantes de todas as idades e disciplinas.</p>
          </DashboardCard>
          <DashboardCard>
              <h4>Project 4</h4>
              <br></br>
              <p>O Innovative Learning Portal (ILP) é uma plataforma educacional avançada projetada para transformar a experiência de aprendizado online. Combinando tecnologias de ponta, personalização inteligente e uma interface amigável, o ILP visa criar um ambiente de aprendizado dinâmico e interativo para estudantes de todas as idades e disciplinas.</p>
          </DashboardCard>
        </DashboardProjects>
        <DashboardInfo>
          <h2>Meu Nome é Pablo Bento Soares</h2>
          <br></br>
          <p>
              Sou um desenvolvedor de software que teve o início da carreira na infraestrutura, experiência em scripts de automação, servidores e estruturas de escalabilidade e monitoramento, dando ênfase nas linguagens; Java, Python e Java Script.
              Uma pessoa que ama a tecnologia desde que me entendo por gente, sempre criando meus brinquedinhos e desafios pessoais, como fazer alguns bots, customização do sistema Android e scratting para pagar minhas contas.
              Não tenho medo de abrir a documentação de uma linguagem aleatória final de semana pra fazer alguma implementação "boba". Estudar paradigmas e estruturas de algoritmo que nunca vou usar novamente.
              Me encontro encantado com o mundo das IA's e dando ênfase na matemática e estatística envolvida em treinamento das mesmas.
          </p>
          <p>
            #DevOPS é cultura.
          </p>
        </DashboardInfo>
      </DashboardContainer>  
    );
};

export default Dashboard;