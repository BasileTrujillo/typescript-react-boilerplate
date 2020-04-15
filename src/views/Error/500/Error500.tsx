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

type Error500Props = {
    title: string;
};

const Error500 = (props: Error500Props) => {
    const {formatMessage: f} = useIntl();

    return (
        <div className="error-500">
            <h1>{props.title}</h1>
            <p>{f({id: 'page500ErrorMessage'})}</p>
        </div>
    );
};

export default Error500;
