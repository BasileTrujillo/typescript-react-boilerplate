import React from 'react';
import Login from './Login';
import { DefaultLayout } from 'layouts/DefaultLayout/DefaultLayout';

const LoginRoute = (props: any) => {
  const title = 'Login';
  return (
    <DefaultLayout>
      <Login title={title} />
    </DefaultLayout>
  );
};

export default LoginRoute;
