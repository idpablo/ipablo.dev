import Footer from '../Footer/Footer';
import Avatar from '../Avatar/Avatar'; 
import Header from '../Header/Header';
import BlackHole from '../Blackhole/Blackhole';
import React, { ReactNode } from 'react';
import DashboardProjects from '../Dashboards/Dashboard';
import { HomeStyled } from '../../theme/Theme';

export interface AppProps {
  rightContent?: ReactNode;
}

export const Home: React.FC<AppProps> = ({ rightContent }) => {

  return (
    <HomeStyled>
      <BlackHole />
      <Header />
      <Avatar src="https://via.placeholder.com/150" alt="User Avatar" size="100px" />
      <DashboardProjects />
      {rightContent}
      <Footer />
    </HomeStyled>
  );
};

export default Home;
