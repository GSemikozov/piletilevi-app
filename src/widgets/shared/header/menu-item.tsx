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
  minHeight: 40,
  padding: '16px 12px',
  color: '#333333',
  fontStyle: 'normal',
  lineHeight: 1,
  textTransform: 'none',
}) as typeof Tab;
