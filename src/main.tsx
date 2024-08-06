import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "sanitize.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sample from "./Sample.tsx";
import Home from "./assets/Home.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/sample",
		element: <Sample />,
	},
]);

// biome-ignore lint/style/noNonNullAssertion: There's always a root element
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
