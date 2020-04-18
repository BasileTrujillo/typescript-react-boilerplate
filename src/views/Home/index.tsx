/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';

const HomeRoute = (props: any) => {
  const title = 'Home';
  return (
    <AppLayout>
      <Home title={title} />
    </AppLayout>
  );
};

export default HomeRoute;
