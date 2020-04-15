import React from 'react';
import {DefaultLayout} from 'layouts/DefaultLayout/DefaultLayout';
import Error500 from './Error500';

const Error500Route = (props: any) => {
  const title = 'Error';
  return  (
      <DefaultLayout>
        <Error500 title={title} />
      </DefaultLayout>
  );
};

export default Error500Route;