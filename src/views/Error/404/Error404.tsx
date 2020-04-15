/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {useIntl} from "react-intl";

type Error404Props = {
    title: string;
};

const Error404 = (props: Error404Props) => {
    const {formatMessage: f} = useIntl();

    return (
        <div className="error-404">
            <h1>{props.title}</h1>
            <p>{f({id: 'pageNotFoundMessage'})}</p>
        </div>
    );
};

export default Error404;
