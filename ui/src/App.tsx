import React from "react";
import { NavigationModal, NavigationButton } from "./components/Navigation";
import Theme from "./Theme";
import {
	TraitsSection,
	ProjectSection,
	ExperienceSection,
	ContactMethodSection
} from "./components/Section";
import { Experience } from "./types"

interface MockExperiences {
	[key: string]: Experience
}

const mocks: MockExperiences = {
	"uber": {
		name: "uber freight",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		start: new Date()
	},
	"chr": {
		name: "c.h. robinson",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		start: new Date()
	}
}

const App: React.FC = () => {
	const [showNav, setShowNav] = React.useState<boolean>(false);
	return (
		<Theme>
			<NavigationButton onClick={() => setShowNav(!showNav)} />
			<NavigationModal
				show={showNav}
				items={["about", "work", "projects", "contact"]}
			/>
			<TraitsSection header={"about"} traits={[]} />
			<ExperienceSection header={"uber"} experience={mocks["uber"]} />
			<ExperienceSection header={"chr"} experience={mocks["chr"]} />
			<ProjectSection header={"freerware/work"} projects={[]} />
			<ProjectSection header={"freerware/negotiator"} projects={[]} />
			<ContactMethodSection header={"contact"} methods={[]} />
		</Theme>
	);
};

export default App;
