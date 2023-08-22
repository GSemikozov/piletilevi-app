import React from 'react';

export type ErrorBoundaryProps = React.PropsWithChildren;

export type ErrorBoundaryState = {
  error: string;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      error: '',
    };
  }

  componentDidCatch(error: Error) {
    this.setState({ error: `${error.name}: ${error.message}` });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    return <>{children}</>;
  }
}
