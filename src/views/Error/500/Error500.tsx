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
