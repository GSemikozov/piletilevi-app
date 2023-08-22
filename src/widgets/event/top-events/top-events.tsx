import { styled, css } from 'styled-components';
import { Typography } from '@mui/material';
import React from 'react';

import { Loader } from '@shared/ui';
import { SectionDecoration } from '@shared/ui-kit/icons';

type TopEventsProps = React.PropsWithChildren<{
  title?: string;
  loading?: boolean;
}>;

export const TopEvents: React.FunctionComponent<TopEventsProps> = props => {
  const { loading, title, children } = props;

  if (loading) {
    return (
      <Root fluid>
        <Loader size={50} />
      </Root>
    );
  }

  return (
    <Root>
      <RootDecoration>
        <SectionDecoration />
      </RootDecoration>
      <Typography variant='h5' sx={{ fontSize: '22px' }}>
        {title}
      </Typography>
      {children}
    </Root>
  );
};

const Root = styled.div<{ fluid?: boolean }>`
  margin: 0 16px 40px;
  padding: 39px 44px 48px 44px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #fff;
  border-radius: 16px;
  position: relative;

  @media (max-width: 599.95px) {
    padding: 16px 0 16px 13px;
    margin: 0 0 32px;
    border-radius: 8px;
  }

  ${p =>
    p.fluid &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    `}
`;

const RootDecoration = styled.div`
  display: flex;
  position: absolute;
  left: 32px;
  bottom: 100%;
  transform: translateY(50%);

  @media (max-width: 599.95px) {
    display: none;
  }
`;
