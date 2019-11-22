import * as React from "React";

import {render} from "react-dom";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import App from "./components/App";

const client = new ApolloClient({
  uri: '',
});

const appContainer = document.getElementById("app");
if (appContainer === null) {
    throw new Error("app container id 'app is not defined");
}

const ProviderApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

render(
    <ProviderApp />,
    appContainer,
);
