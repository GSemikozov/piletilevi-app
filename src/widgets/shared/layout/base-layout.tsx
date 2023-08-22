import { Header } from '@widgets/shared';
import { Layout } from '@shared/ui/layout';

type BaseLayoutProps = React.PropsWithChildren;

export const BaseLayout: React.FunctionComponent<BaseLayoutProps> = props => {
  const { children } = props;

  return <Layout headerSlot={<Header />}>{children}</Layout>;
};
