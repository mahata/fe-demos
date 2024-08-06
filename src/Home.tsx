import { Link } from "react-router-dom";

export default function Home() {
	return (
		<ul>
			<li>
				<Link to="/sample">Sample</Link>
			</li>
			<li>
				<Link to="/bottom-drawer">Bottom Drawer</Link>
			</li>
		</ul>
	);
}
