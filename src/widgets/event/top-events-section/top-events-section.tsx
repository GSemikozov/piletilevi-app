import React from 'react';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';
import SwipeableViews from 'react-swipeable-views';
import { IconButton } from '@mui/material';

import { SectionFilled } from '@widgets/shared';
import { ChevronIcon } from '@shared/ui-kit/icons';

type TopEventsSectionProps = {
  children: React.ReactNode[];

  slideItemsCount?: number;
  loading?: boolean;
};

const leftChevron = <ChevronIcon style={{ transform: 'rotate(90deg)' }} />;
const rightChevron = <ChevronIcon style={{ color: '#2F00B2', transform: 'rotate(-90deg)' }} />;

const SX_STYLES = {
  iconButton: {
    color: '#2F00B2',
    '&.Mui-disabled': { color: '#2F00B2', opacity: 0.5 },
  },
};

const CAROUSEL_CONTAINER_STYLES = {
  transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
  webkitOverflowScrolling: 'touch',
};

export const TopEventsSection: React.FunctionComponent<TopEventsSectionProps> = props => {
  const { slideItemsCount = 5, loading, children } = props;

  const { t } = useTranslation('common');

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNextStep = React.useCallback((): void => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }, []);

  const handleBackStep = React.useCallback((): void => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }, []);

  const handleChangeStep = (step: number) => {
    setActiveStep(step);
  };

  const carouselSteps = React.useMemo(() => {
    const result: React.ReactNode[] = [];
    const childrenArray = [...React.Children.toArray(children)];

    while (childrenArray.length > 0) {
      result.push(childrenArray.splice(0, slideItemsCount));
    }

    return result;
  }, [slideItemsCount, children]);

  const maxSteps = carouselSteps.length;

  const controlsSlot = React.useMemo(() => {
    const currentStep = activeStep + 1;

    if (maxSteps === 1) {
      return null;
    }

    return (
      <Actions>
        <StepsInfo>
          {currentStep}/{maxSteps}
        </StepsInfo>

        <Controls>
          <IconButton
            sx={SX_STYLES.iconButton}
            disabled={currentStep === 1}
            onClick={handleBackStep}
          >
            {leftChevron}
          </IconButton>

          <IconButton
            sx={SX_STYLES.iconButton}
            disabled={currentStep === maxSteps}
            onClick={handleNextStep}
          >
            {rightChevron}
          </IconButton>
        </Controls>
      </Actions>
    );
  }, [activeStep, maxSteps, handleBackStep, handleNextStep]);

  return (
    <SectionFilled
      withDecoration
      title={t('events.top.title')}
      actionsSlot={controlsSlot}
      loading={loading}
    >
      <SwipeableViews
        containerStyle={CAROUSEL_CONTAINER_STYLES}
        index={activeStep}
        onChangeIndex={handleChangeStep}
      >
        {carouselSteps.map((stepItems, index) => (
          <CarouselItem key={index} columns={slideItemsCount}>
            {stepItems}
          </CarouselItem>
        ))}
      </SwipeableViews>
    </SectionFilled>
  );
};

const CarouselItem = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: ${p => `repeat(${p.columns}, minmax(240px, 1fr))`};
  gap: 30px;
  width: 100%;
  @media (max-width: 599.95px) {
    display: flex;
    grid-template-columns: ${p => `repeat(${p.columns}, minmax(160px, 1fr))`};
    gap: 8px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`;

const StepsInfo = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 400;
`;

const Controls = styled.div``;
