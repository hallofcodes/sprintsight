import projects from "./lib/project";
import { ProjectType } from "./typed";
import { fetchGitCommits } from "./lib/github/fetchGitCommits";
import Project from "./components/dashboard/Project";
import Scope from "./components/dashboard/Scope";
import CommitsHistory from "./components/dashboard/CommitsHistory";
import Modules from "./components/dashboard/Modules";
import Links from "./components/dashboard/Links";

export default async function SprintSight() {
  const regex = /https?:\/\/github\.com\/([^\/]+)\/([^\/]+)/;
  const match = projects[0].github_urls[0].url.match(regex);

  const commits = match
    ? await fetchGitCommits({ owner: match[1], repo: match[2] })
    : undefined;

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {projects.map((project: ProjectType, i: number) => (
        <section key={i} className="mb-12">
          <Project project={project} />
          <Scope project={project} />
          <CommitsHistory commits={commits} />
          <Modules project={project} />
          <Links project={project} />
        </section>
      ))}
    </main>
  );
}
