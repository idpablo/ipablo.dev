import React from 'react';
import { HomeStyled, NotFoundContainerStyled, SmallText, SmallTextFooter, ErrorCode } from './NotFound.styles';

const NotFoundPage: React.FC = () => {
  return (
    <HomeStyled>
      <NotFoundContainerStyled>
        <SmallText>Ops! Algo deu errado.</SmallText>
        <ErrorCode>404</ErrorCode>
        <SmallTextFooter>Supera man...</SmallTextFooter>
      </NotFoundContainerStyled>
    </HomeStyled>
  );
};

export default NotFoundPage;
