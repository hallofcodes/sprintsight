import { ModuleStatus, ProjectType } from "../typed";

const projects: ProjectType[] = [
  {
    name: "Sprint Sight",
    url: "https://github.com/hallofcodes/sprintsight",
    github_urls: [
      {
        url: "https://github.com/hallofcodes/sprintsight",
      },
    ],
    modules: [
      {
        name: "Dashboard",
        status: ModuleStatus.NotImplemented,
      },
      {
        name: "Authentication",
        status: ModuleStatus.NotImplemented,
      },
      {
        name: "Analytics",
        status: ModuleStatus.NotImplemented,
      },
    ],
  },
];

export default projects;
