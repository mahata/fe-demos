import React from "react";

export default function BottomDrawer() {
	const [showBottomDrawer, setShowBottomDrawer] = React.useState(false);

	return (
		<>
			<div className="p-2">
				<button
					type="button"
					className="bg-green-500 text-white p-2 rounded"
					onClick={() => setShowBottomDrawer((prev) => !prev)}
				>
					Show/Hide Drawer
				</button>
			</div>
			<div
				className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-4 ${showBottomDrawer ? "animate-slide-up opacity-100" : "opacity-0"}`}
			>
				Bottom Drawer
			</div>
		</>
	);
}
