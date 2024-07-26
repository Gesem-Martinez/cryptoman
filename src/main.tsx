import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.tsx";
import Cryptos from "./components/Cryptos.tsx";
import Dashboard from "./components/Dashboard.tsx";
import CryptoInfo from "./components/CryptoInfo.tsx";
import Cryptocurrencies from "./components/Cryptocurrencies.tsx";
import store from "./app/store.js";
import { Provider } from "react-redux";
import News from "./components/News.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cryptos",
        element: <Cryptos />,
        children: [
          {
            index: true,
            element: <Cryptocurrencies />
          },
          {
            path: ":cryptoUUID",
            element: <CryptoInfo />,
          },
        ],
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
