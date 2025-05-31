import styled from 'styled-components';


export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #00796B;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 1px;
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TitleLight = styled.span`
  font-weight: 300;
  font-size: 14px;
`;

export const TitleBold = styled.span`
  font-weight: 700;
`;

export const Header = styled.header`
  width: 100%;
  padding: 4px 0;
  background-color: #fff;
  border-bottom: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const LogoWrapper = styled.div`
  align-items: center;
`;

export const LogoImage = styled.img`
  width: auto;
  height: 44px;
`;