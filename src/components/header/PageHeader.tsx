import React from 'react';
import { HeaderContainer, BackWrapper, BackButton, Title, TitleLight, TitleBold} from './styles/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface PageHeaderProps {
  title: React.ReactNode;
  onBack?: () => void;
  action?: React.ReactNode;
}


const PageHeader: React.FC<PageHeaderProps> = ({ title, onBack, action }) => {
  return (
    <HeaderContainer>
      <BackWrapper>
        {onBack && (
          <BackButton onClick={onBack}>
            <NavigateBeforeIcon />
          </BackButton>
        )}
        <Title>{title}</Title>
      </BackWrapper>
      {action && <div>{action}</div>}
    </HeaderContainer>
  );
};

export default PageHeader;

export { TitleLight, TitleBold };
