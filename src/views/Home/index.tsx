import React from 'react';
import Home from './Home';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';

const HomeRoute = (props: any) => {
  return (
    <AppLayout>
      <Home/>
    </AppLayout>
  );
};

export default HomeRoute;
