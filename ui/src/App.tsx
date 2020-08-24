import React from "react";
import { NavigationModal, NavigationButton } from "./components/Navigation";
import Theme from "./Theme";

const App: React.FC = () => {
	const [showNav, setShowNav] = React.useState<boolean>(false);
	return (
		<Theme>
			<NavigationButton onClick={() => setShowNav(!showNav)}/>
			<NavigationModal show={showNav} items={["about", "work", "projects", "contact"]} />
		</Theme>
	);
};

export default App;
