import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { storeMock } from './store.mock';

export const ReduxProviderMock: FunctionComponent = ({ children }) => <Provider store={storeMock}>{children}</Provider>;
