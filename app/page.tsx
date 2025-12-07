import Image from "next/image";
import projects from "./lib/project";
import StatusBadge from "./components/StatusBadge";
import { ProjectType } from "./typed";

export default function SprintSight() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {projects.map((project: ProjectType, i: number) => (
        <section key={i} className="mb-12">
          <div className="flex gap-3">
            {project.icon_url && (
              <Image
                src={project.icon_url}
                width="90"
                height="50"
                alt={project.name}
              />
            )}
            <div>
              <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
              {project.description && <p>{project.description}</p>}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  className="text-orange-300 underline text-sm"
                >
                  {project.url}
                </a>
              )}
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-3">Modules</h2>
          <div className="space-y-3">
            {project.modules?.map((mod, i) => (
              <div
                key={i}
                className="border rounded-md p-4 flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium">{mod.name}</p>
                  {mod.description && (
                    <p className="text-sm text-gray-600">{mod.description}</p>
                  )}
                </div>

                <StatusBadge status={mod.status} />
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            GitHub Repositories
          </h2>
          <div className="space-y-3">
            {project.github_urls.map((repo, i) => (
              <div key={i} className="border rounded-md p-4 flex flex-col">
                {repo.name && (
                  <h3 className="text-xl font-semibold mb-3">{repo.name}</h3>
                )}
                {repo.description && <p>{repo.description}</p>}
                <a
                  className="text-orange-300 underline"
                  href={repo.url}
                  target="_blank"
                >
                  {repo.url}
                </a>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-3">NPM Packages</h2>
          <div className="space-y-3">
            {project.npm_urls &&
              project.npm_urls.map((repo, i) => (
                <div key={i} className="border rounded-md p-4 flex flex-col">
                  {repo.name && (
                    <h3 className="text-xl font-semibold mb-3">{repo.name}</h3>
                  )}
                  {repo.description && <p>{repo.description}</p>}
                  <a
                    className="text-orange-300 underline"
                    href={repo.url}
                    target="_blank"
                  >
                    {repo.url}
                  </a>
                </div>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
