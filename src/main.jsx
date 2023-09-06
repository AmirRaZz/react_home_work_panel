import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./containers/layout/Layout.jsx"
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <App />
            </Layout>
        </BrowserRouter>
    </React.StrictMode>
);
