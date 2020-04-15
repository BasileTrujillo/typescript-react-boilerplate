import React from "react";
import {Route, RouteContext, RouteParams, RouterContext} from 'universal-router';
import HomeRoute from "../../views/Home";
import Error404Route from "../../views/Error/404";
import LoginRoute from "../../views/Login";

const routes: Route = {
    path: '',

    // Keep in mind, routes are evaluated in order
    children: [
        {
            path: '',
            action: async (context: RouteContext<any, RouterContext>, params: RouteParams) => {
                return <HomeRoute />;
            }
        },
        {
            path: '/login',
            action: async (context: RouteContext<any, RouterContext>, params: RouteParams) => {
                return <LoginRoute />;
            }
        },

        // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
        {
            path: '(.*)',
            action: async (context: RouteContext<any, RouterContext>, params: RouteParams) => {
                return <Error404Route />;
            }
        },
    ]
};

// The error page is available by permanent url for development mode
/*if (__DEV__) {
    routes.children!.unshift({
        path: '/error',
        action: require('./error').default,
    });
}*/

export default routes;
