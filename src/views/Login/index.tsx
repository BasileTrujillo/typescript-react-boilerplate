/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

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
