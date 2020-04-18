import React from 'react';
import { DefaultLayout } from 'layouts/DefaultLayout/DefaultLayout';
import Error404 from './Error404';

const Error404Route = (props: any) => {
  const title = 'Page Not Found';
  return (
    <DefaultLayout>
      <Error404 title={title} />
    </DefaultLayout>
  );
};

export default Error404Route;
