import React, { FunctionComponent } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

export interface Props {
  component: (props: RouteComponentProps) => JSX.Element;
  isAccessible: boolean;
  redirectToWhenInaccessible: string;
  exact: boolean;
  path: string;
}

const render = (
  isAccessible: boolean,
  Component: (props: RouteComponentProps) => JSX.Element,
  redirectToWhenInaccessible: string
) => (props: RouteComponentProps) => (
  isAccessible
    ? <Component {...props} />
    : <Redirect to={{ pathname: redirectToWhenInaccessible }} />
);

const ProtectedRoute: FunctionComponent<Props> = ({
  component, isAccessible, redirectToWhenInaccessible, exact, path
}) => (
  <Route
    path={path}
    exact={exact}
    render={render(isAccessible, component, redirectToWhenInaccessible)}
  />
);

export default ProtectedRoute;
