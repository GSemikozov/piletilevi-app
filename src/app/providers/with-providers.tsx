import { compose } from '@reduxjs/toolkit';

import { withRedux } from './with-redux';
import { withRouter } from './with-router';
import { withErrorBoundary } from './with-error-boundary';
import { withMaterialUi } from './with-material-ui';

export const withProviders = compose(withRedux, withRouter, withMaterialUi, withErrorBoundary);
