import { Link } from "react-router-dom";

export default function Home() {
	return (
		<ul className="p-2 list-disc list-inside">
			<li>
				<Link
					to="/bottom-drawer"
					className="text-blue-600 visited:text-gray-500 underline"
				>
					Bottom Drawer
				</Link>
			</li>
		</ul>
	);
}
