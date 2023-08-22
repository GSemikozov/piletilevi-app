import { Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

export type MenuItemProps = {
  label?: string;
  href?: string;
};

export const MenuItem: React.FunctionComponent<MenuItemProps> = props => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
  };

  return <StyledTab component='a' onClick={handleClick} {...props} />;
};

const StyledTab = styled(Tab)({
  minHeight: 44,
  minWidth: 'auto',
  padding: '12px 16px',
  color: '#333333',
  fontStyle: 'normal',
  lineHeight: 1,
  textTransform: 'none',
  fontSize: '1rem',
}) as typeof Tab;
