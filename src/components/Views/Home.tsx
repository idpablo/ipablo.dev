import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React, { ReactNode } from 'react';
import DashboardProjects from '../Dashboards/Dashboard';
import { HomeStyled } from '../../theme/Theme';

import userAvatar from '../../theme/assets/ipablo.dev.webp';

export interface AppProps {
  rightContent?: ReactNode;
}

export const Home: React.FC<AppProps> = ({ rightContent }) => {

  return (
    <HomeStyled>
      <Header />
      <DashboardProjects />
      {rightContent}
      <Footer />
    </HomeStyled>
  );
};

export default Home;
