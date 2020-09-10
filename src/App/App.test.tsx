import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '.';
import { ReduxProviderMock } from 'shared/mocks/reduxProvider.mock';

test('renders without crashing', () => {
  render(<ReduxProviderMock><BrowserRouter><App /></BrowserRouter></ReduxProviderMock>);
});
