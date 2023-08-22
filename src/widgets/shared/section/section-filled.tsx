import React from 'react';
import { styled, css } from 'styled-components';

import { Loader } from '@shared/ui';
import { SectionDecoration } from '@shared/ui-kit/icons';

type SectionFilledProps = React.PropsWithChildren<{
  title?: string;
  loading?: boolean;
  withDecoration?: boolean;

  actionsSlot?: React.ReactNode;
}>;

export const SectionFilled: React.FunctionComponent<SectionFilledProps> = props => {
  const { loading, title, withDecoration, actionsSlot, children } = props;

  if (loading) {
    return (
      <Root fluid>
        <Loader size={50} />
      </Root>
    );
  }

  return (
    <Root>
      {withDecoration ? (
        <Decoration>
          <SectionDecoration />
        </Decoration>
      ) : null}

      <Header>
        <Title>{title}</Title>
        {actionsSlot ? <Actions>{actionsSlot}</Actions> : null}
      </Header>

      <Main>{children}</Main>
    </Root>
  );
};

const Root = styled.div<{ fluid?: boolean }>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 16px 40px;
  padding: 39px 44px 48px 44px;
  background-color: #fff;
  border-radius: 16px;
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

const Decoration = styled.div`
  display: flex;
  position: absolute;
  left: 32px;
  bottom: 100%;
  transform: translateY(50%);
  @media (max-width: 599.95px) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const Title = styled.h5`
  font-size: 22px;
  font-weight: 700;

  @media (max-width: 599.95px) {
    font-size: 18px;
    line-height: 1.3;
  }
`;

const Actions = styled.div`
  margin-left: auto;
`;

const Main = styled.div`
  width: 100%;
  margin-top: 24px;
`;
