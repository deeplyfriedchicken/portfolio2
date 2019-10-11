import * as React from "react";

import { routerApp } from "mr-router5";
import { RouteDef } from "mr-router5";

import createRouter from "./create-router";
import routes from "./routes";

export default (Element: any, appRoutes: RouteDef[] = routes, removeLoggerPlugin = false) => {
    const router = createRouter(appRoutes, removeLoggerPlugin);
    return routerApp(router, appRoutes, () => (
        <Element />
    ));
}