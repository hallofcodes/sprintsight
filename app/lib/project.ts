import { ModuleStatus, ProjectType } from "../typed";

const projects: ProjectType[] = [
  {
    name: "Sprint Sight",
    description:
      "A dashboard that visualizes module status and GitHub commit activity.",
    url: "https://github.com/hallofcodes/sprintsight",
    icon_url:
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    scope_description:
      "Sprint Sight provides an overview of project modules, including implementation status, partial progress, bugs, and Git commit history.",
    scope_list: [
      { title: "Module status tracking (Implemented, Partial, Bug, etc.)" },
      { title: "GitHub API integration for commit history" },
      { title: "Single-page dashboard UI in Next.js" },
      { title: "Filtering and module search" },
      { title: "Commit author, message, and timestamp display" },
    ],
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
