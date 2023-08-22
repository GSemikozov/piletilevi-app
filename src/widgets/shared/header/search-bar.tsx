import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

import { SearchIcon } from '@shared/ui-kit/icons';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      size='small'
      variant='outlined'
      id='search'
      type='search'
      placeholder='Search for events, performers, venues'
      value={searchTerm}
      onChange={handleChange}
      sx={{
        maxWidth: 526,
        width: '100%',
        color: 'red',
        ['.MuiInputBase-root']: {
          border: 'none',
          '&:hover': {
            border: 'initial',
          },
        },
      }}
      InputProps={{
        sx: theme => ({
          height: '44px',
          borderRadius: '100px',
          border: '1px solid #E2E2E4',
          [theme.breakpoints.down('sm')]: {
            height: '56px',
          },
        }),
        endAdornment: (
          <InputAdornment
            variant='filled'
            sx={{ height: '100%' }}
            position='end'
            component={() => (
              <IconButton
                color='primary'
                edge='end'
                sx={theme => ({
                  height: '100%',
                  width: '56px',
                  borderRadius: '0 100px 100px 0',
                  backgroundColor: 'primary.main',
                  color: '#fff',
                  top: '0',
                  bottom: '0',
                  right: '-2px',
                  zIndex: 1,
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                  [theme.breakpoints.down('sm')]: {
                    backgroundColor: 'transparent',
                    color: '#333',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#333',
                    },
                  },
                })}
              >
                <SearchIcon />
              </IconButton>
            )}
          />
        ),
      }}
    />
  );
};
