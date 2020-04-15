import React from "react";
import UniversalRouter from 'universal-router';
import routes from './routes';
import Error404Route from "../../views/Error/404";
import Error500Route from "../../views/Error/500";

export default new UniversalRouter(routes, {
    resolveRoute(context, params) {
        if (typeof context.route.action === 'function') {
            return context.route.action(context, params);
        }
        return undefined;
    },
    errorHandler(error, context) {
        console.error(error);
        console.info(context);
        switch (error.status) {
            case 404:
                return (<Error404Route error={error} context={context}/>);
            default:
                return (<Error500Route error={error} context={context}/>);

        }
    }
});