import Footer from '../Footer/Footer';
import Avatar from '../Avatar/Avatar'; 
import Header from '../Header/Header';
import BlackHole from '../Blackhole/Blackhole';
import React, { ReactNode } from 'react';
import DashboardProjects from '../Dashboards/Dashboard';
import { HomeStyled } from '../../theme/Theme';

import userAvatar from '../../theme/assets/ipablo.dev.png';
<Avatar src={userAvatar} alt="User Avatar" size="200px" />

export interface AppProps {
  rightContent?: ReactNode;
}

export const Home: React.FC<AppProps> = ({ rightContent }) => {

  return (
    <HomeStyled>
      <BlackHole />
      <Header />
      <Avatar src={userAvatar} alt="User Avatar" size="200px" />
      <DashboardProjects />
      {rightContent}
      <Footer />
    </HomeStyled>
  );
};

export default Home;
