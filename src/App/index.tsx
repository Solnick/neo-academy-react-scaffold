import React from 'react';
import ProtectedRoute from 'shared/components/ProtectedRoute';
import Layout from './Layout';
import HomePage from './HomePage';

const App = () => {
  return (
    <Layout>
      <ProtectedRoute
        path="/"
        isAccessible
        redirectToWhenInaccessible="/"
        component={HomePage}
        exact
      />
    </Layout>
  );
};

export default App;
