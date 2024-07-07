import React from 'react';
import { HomeStyled, NotFoundContainerStyled, SmarllText, SmarllTextFooter, ErrorCode } from '../../theme/Theme'

const NotFound = () => {
    return (
        <HomeStyled> 
            <NotFoundContainerStyled>
                <SmarllText>Ops! Algo deu errado.</SmarllText>
                <ErrorCode>404</ErrorCode>
                <SmarllTextFooter>Supera man...</SmarllTextFooter>
            </NotFoundContainerStyled>
        </HomeStyled>
    );
};

export default NotFound;