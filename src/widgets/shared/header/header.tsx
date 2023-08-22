import React from 'react';
import { styled } from 'styled-components';
import { withStyles } from 'tss-react/mui';
import { Badge, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

import { CartIcon, HeartOutlinedIcon, LogoDesktop, LogoMobile, MenuIcon, UserIcon } from '@shared/ui-kit/icons';

import { MenuItem } from './menu-item';
import { Menu } from './menu';
import { Search } from './search-bar';

import type { MenuItemProps } from './menu-item';

const MOCK_MENU: MenuItemProps[] = [
  {
    label: 'Kõik',
    href: '/',
  },
  {
    label: 'Täna',
    href: '/',
  },
  {
    label: 'Nädalavahetusel',
    href: '/',
  },
];

const badgeAnchorOrigin = {
  vertical: 'bottom',
  horizontal: 'right',
} as const;

export const Header: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Root>
      <TopNavigator>
        <Logo>
          <Link to={'/'}>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <LogoDesktop />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' }, mr: { xs: 1.5 } }}>
              <LogoMobile />
            </Box>
          </Link>
        </Logo>

        <SearchBar>
          <Search />
        </SearchBar>

        <Actions>
          <IconButton color='inherit'>
            <StyledBadge anchorOrigin={badgeAnchorOrigin} variant='dot' color='success'>
              <UserIcon />
            </StyledBadge>
          </IconButton>

          <IconButton color='inherit' sx={{ display: { xs: 'none', md: 'block' } }}>
            <HeartOutlinedIcon />
          </IconButton>

          <IconButton edge='end' color='inherit' sx={{ display: { xs: 'none', md: 'block' } }}>
            <CartIcon />
          </IconButton>

          <IconButton color='inherit' sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Actions>
      </TopNavigator>

      <BottomNavigator>
        <Menu value={value} onChange={handleChange} aria-label='navbar menu'>
          {MOCK_MENU.map(menuItem => (
            <MenuItem key={menuItem.label} label={menuItem.label} href={menuItem.href} />
          ))}
        </Menu>
      </BottomNavigator>
    </Root>
  );
};

const StyledBadge = withStyles(Badge, {
  badge: {
    width: 10,
    height: 10,
  },
  colorSuccess: {
    backgroundColor: '#00C212',
  },
}) as typeof Badge;

const Root = styled.div`
  width: 100%;
  padding: 24px 60px 0 60px;

  @media (max-width: 599.95px) {
    padding: 8px 16px 12px;
    display: flex;
    align-items: center;
  }
`;

const TopNavigator = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;

  > * {
    height: 40px;
  }

  @media (max-width: 599.95px) {
    margin: 8px auto 0;
  }
`;

const SearchBar = styled.div`
  max-width: 524px;
  width: 100%;
  margin: 0 8px;
`;

const BottomNavigator = styled.div`
  margin-top: 16px;

  @media (max-width: 599.95px) {
    display: none;
  }
`;
