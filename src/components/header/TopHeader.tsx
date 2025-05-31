import React from 'react';
import { Header, LogoWrapper, LogoImage } from './styles/styles';
import logo from '../../assets/img/agrotis.webp';

const TopHeader: React.FC = () => {
  return (
    <Header>
      <LogoWrapper>
        <LogoImage src={logo} alt="Logo Agrotis" />
      </LogoWrapper>
    </Header>
  );
};

export default TopHeader;
