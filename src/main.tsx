import React from "react";
import ReactDOM from "react-dom/client";
import "sanitize.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BottomDrawer from "./BottomDrawer.tsx";
import Home from "./Home.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/bottom-drawer",
		element: <BottomDrawer />,
	},
]);

// biome-ignore lint/style/noNonNullAssertion: There's always a root element
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
