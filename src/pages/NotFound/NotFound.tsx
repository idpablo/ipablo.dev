import React from 'react';
import { HomeStyled, NotFoundContainerStyled, SmallText, SmallTextFooter, ErrorCode } from './NotFound.styles';
import { useLanguage } from '../../core/i18n';

const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <HomeStyled>
      <NotFoundContainerStyled>
        <SmallText>{t.notFound.error}</SmallText>
        <ErrorCode>{t.notFound.code}</ErrorCode>
        <SmallTextFooter>{t.notFound.message}</SmallTextFooter>
      </NotFoundContainerStyled>
    </HomeStyled>
  );
};

export default NotFoundPage;
