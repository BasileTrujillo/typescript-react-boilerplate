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
