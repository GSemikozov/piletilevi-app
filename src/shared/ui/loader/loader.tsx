import { CircularProgress } from '@mui/material';

import type { CircularProgressProps } from '@mui/material';

export const Loader: React.FunctionComponent<CircularProgressProps> = props => {
  return <CircularProgress {...props} />;
};
