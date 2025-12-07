import { ModuleStatus, ProjectType } from "../typed";

const projects: ProjectType[] = [
  {
    name: "Sprint Sight",
    description: "Hello world",
    url: "https://github.com/hallofcodes/sprintsight",
    icon_url: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    github_urls: [
      {
        url: "https://github.com/hallofcodes/sprintsight",
      },
    ],
    npm_urls: [
      {
        name: "SprintSight",
        description: "Hello world",
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
