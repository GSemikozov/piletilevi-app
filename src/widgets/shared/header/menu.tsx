import { Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { TabsProps } from '@mui/material';

export const Menu: React.FunctionComponent<TabsProps> = props => {
  return <StyledTabs {...props} />;
};

const StyledTabs = styled(Tabs)({});
