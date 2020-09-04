import React from "react";
import { NavigationModal, NavigationButton } from "./components/Navigation";
import Theme from "./Theme";
import {
	TraitsSection,
	ProjectSection,
	ExperienceSection,
	ContactMethodSection,
	LandingSection
} from "./components/Section";
import { Trait, Experience, ContactMethod, ContactMethodType, Project } from "./types"

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

const mockContactMethods: ContactMethod[] = [
	{
		name: "mobile",
		reachableAt: "+1.614.657.3542",
		methodType: ContactMethodType.PHONE
	},
	{
		name: "personal email",
		reachableAt: "freerjm@miamioh.edu",
		methodType: ContactMethodType.EMAIL
	},
	{
		name: "work email",
		reachableAt: "freer@iso.io",
		methodType: ContactMethodType.EMAIL
	}
]

const mockProjects: Project[] = [
	{
		name: "freerware/work",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		name: "freerware/negotiator",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
]

const mockTraits: Trait[] = [
	{
		description: "west coast midwesterner"
	},
	{
		description: "90s kid"
	},
	{
		description: "craft brew taster"
	},
	{
		description: "tabs > spaces"
	},
	{
		description: "passive audiofile"
	},
	{
		description: "unwilling perfectionist"
	},
	{
		description: "digital laborer"
	},
	{
		description: "powered by electronic & hip & hop music"
	},
	{
		description: "outing introvert"
	},
	{
		description: "hockey player"
	},
	{
		description: "mac > pc"
	},
	{
		description: "vimmer"
	},
	{
		description: "struggling blogger"
	},
	{
		description: "learning addict"
	},
	{
		description: "lucky husband"
	},
	{
		description: "futuristic dreamer"
	},
	{
		description: "blue-collar programmer"
	},
	{
		description: "aspiring minimalist"
	}
]

const App: React.FC = () => {
	const [showNav, setShowNav] = React.useState<boolean>(false);
	return (
		<Theme>
			<NavigationButton show={showNav} onClick={() => setShowNav(!showNav)} />
			<NavigationModal
				show={showNav}
				items={["about", "work", "projects", "contact"]}
				onNavItemClick={() => setShowNav(!showNav)}
			/>
			<LandingSection />
			<TraitsSection traits={mockTraits} />
			<ExperienceSection experience={mocks["uber"]} />
			<ExperienceSection experience={mocks["chr"]} />
			<ProjectSection project={mockProjects[0]} />
			<ProjectSection project={mockProjects[0]} />
			<ContactMethodSection reverse methods={mockContactMethods} />
		</Theme>
	);
};

export default App;
