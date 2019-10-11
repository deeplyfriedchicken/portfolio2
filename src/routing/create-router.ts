import createRouter from "router5";
import browserPlugin from "router5-plugin-browser";
import loggerPlugin from "router5-plugin-logger";

import { RouteDef } from "mr-router5";

import routes from "./routes";

export default (appRoutes: RouteDef[] = routes, removeLoggerPlugin: boolean) => {
    const options: any = {
        defaultRoute: "home",
        trailingSlash: "always",
        queryParamsMode: "loose",
    }

    const router = createRouter(appRoutes, options);

    router.usePlugin(browserPlugin());

    if (!removeLoggerPlugin) {
        router.usePlugin(loggerPlugin);
    }

    return router;
}