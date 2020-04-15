/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { ReactNode } from 'react';
import history from 'services/routing/history';
import {Link as MuiLink} from "@material-ui/core";

const isLeftClickEvent = (event: MouseEvent) => {
  return event.button === 0;
};

const isModifiedEvent = (event: MouseEvent) => {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

type PropTypes = {
  to: string;
  onClick?: Function;
  children?: ReactNode;
  className?: string;
};

const Link = ({ to, children, onClick, ...restProps }: PropTypes) => {
    return (
        <MuiLink
            color="inherit"
            href={to}
            {...restProps}
            onClick={(event: any) => {
                if (onClick) {
                    onClick(event);
                }

                if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
                    return;
                }

                if (event.defaultPrevented === true) {
                    return;
                }

                event.preventDefault();
                history.push(to);
            }}
        >
            {children}
        </MuiLink>
    );
};

export default Link;
