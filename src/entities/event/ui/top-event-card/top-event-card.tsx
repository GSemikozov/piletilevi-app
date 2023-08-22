import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export type Event = {
  id: number;
  image: string;
  date: string;
  title: string;
  time?: string;
  getImage: () => string;
};

export type EventCardProps = {
  event: Event;
  index?: number;
};

export const TopEventCard: React.FC<EventCardProps> = React.memo(({ event, index }) => {
  const { id, date, title, time } = event;
  const image = event.getImage();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/events/${id}`);
  };

  return (
    <Card
      sx={{
        border: 'none',
        boxShadow: 'none',
        cursor: 'pointer',
      }}
      key={id}
      onClick={handleNavigate}
    >
      <CardMedia
        sx={theme => ({
          height: 125,
          borderRadius: 1,
          [theme.breakpoints.down('sm')]: {
            width: 160,
            height: 160,
          },
        })}
        image={image}
        title={title}
      >
        {index && (
          <Box
            sx={theme => ({
              position: 'relative',
              top: '4px',
              display: 'inline-flex',
              padding: '2px 11px 2px 8px',
              backgroundColor: 'primary.main',
              color: '#fff',
              fontSize: '15px', // TODO: should be Inter
              fontWeight: 700,
              borderRadius: '0 50% 50% 0',

              [theme.breakpoints.down('sm')]: {
                fontSize: '14px',
              },
            })}
          >
            {index}
          </Box>
        )}
      </CardMedia>
      <CardContent
        sx={theme => ({
          pl: 0,
          pr: 0,
          pb: '0 !important',
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            pt: 1,
          },
        })}
      >
        <Typography
          gutterBottom
          variant='body2'
          sx={theme => ({
            [theme.breakpoints.down('sm')]: {
              order: 2,
              mb: 0,
              mt: 1,
            },
          })}
        >
          {date} {time && time}
        </Typography>
        <Title>{title}</Title>
      </CardContent>
    </Card>
  );
});

const Title = styled.div`
  max-height: 52px;
  margin-top: 8px;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 599.95px) {
    font-size: 15px;
    line-height: 1.3;
    max-height: 38px;
    order: 1;
    margin-top: 0;
  }
`;
