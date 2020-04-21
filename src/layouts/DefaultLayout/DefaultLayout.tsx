import React, {ReactNode} from 'react';
import {Footer} from "../AppLayout/Footer";

type DefaultLayoutProps = {
    children: ReactNode;
};

/**
 * The DefaultLayout layout with basically nothing but a div
 */
export const DefaultLayout = (props: DefaultLayoutProps) => (
    <div className={"container"}>
        {props.children}
        <Footer/>
    </div>
);

DefaultLayout.defaultProps = {};
