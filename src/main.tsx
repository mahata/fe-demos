import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>main</div>,
	},
	{
		path: "/sample",
		element: <div>Sample</div>,
	}
]);

// biome-ignore lint/style/noNonNullAssertion: There's always a root element
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
