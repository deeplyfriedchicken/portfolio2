import * as React from "React";

import createRouterApp from "./routing/initialize-router";

import {render} from "react-dom";

import App from "./components/App";

const appContainer = document.getElementById("app");
if (appContainer === null) {
    throw new Error("app container id 'app is not defined");
}

const RApp = createRouterApp(App);

render(
    <RApp />,
    appContainer,
);
