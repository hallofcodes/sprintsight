import Image from "next/image";
import projects from "./lib/project";
import StatusBadge from "./components/StatusBadge";
import { ProjectType } from "./typed";
import { fetchGitCommits } from "./lib/github/fetchGitCommits";

export default async function SprintSight() {
  const regex = /https?:\/\/github\.com\/([^\/]+)\/([^\/]+)/;
  const match = projects[0].github_urls[0].url.match(regex);

  const commits = match
    ? await fetchGitCommits({ owner: match[1], repo: match[2] })
    : null;

  function timeAgo(dateString: string) {
    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now.getTime() - date.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (days > 0) return rtf.format(-days, "day");
    if (hours > 0) return rtf.format(-hours, "hour");
    if (minutes > 0) return rtf.format(-minutes, "minute");
    return rtf.format(-seconds, "second");
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {projects.map((project: ProjectType, i: number) => (
        <section key={i} className="mb-12">
          <div className="flex gap-3">
            <div className="relative w-full max-w-[120px] aspect-3/2">
              {project.icon_url && (
                <Image
                  src={project.icon_url}
                  alt={project.name}
                  fill
                  className="object-contain"
                />
              )}
            </div>
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

          {(project.scope_description || project.scope_list) && (
            <>
              <h2 className="text-xl font-semibold mt-6 mb-3">Scopes</h2>
              {project.scope_description && (
                <p className="mb-3">{project.scope_description}</p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.scope_list &&
                  project.scope_list.map((mod, i) => (
                    <div key={i} className="border rounded-md p-3 shadow-sm">
                      <p className="font-medium">{mod.title}</p>

                      {mod.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {mod.description}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </>
          )}

          {commits && (
            <>
              <h2 className="text-xl font-semibold mt-6 mb-3">
                Commits History
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {commits.map((mod, i) => (
                  <div key={i} className="border rounded-md p-3 shadow-sm">
                    <h4 className="font-medium">{mod.commit}</h4>
                    <p className="text-sm text-gray-600">{timeAgo(mod.date)}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {project.modules && (
            <>
              <h2 className="text-xl font-semibold mt-6 mb-3">Modules</h2>
              <div className="space-y-3">
                {project.modules.map((mod, i) => (
                  <div
                    key={i}
                    className="border rounded-md p-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-lg font-medium">{mod.name}</p>
                      {mod.description && (
                        <p className="text-sm text-gray-600">
                          {mod.description}
                        </p>
                      )}
                    </div>

                    <StatusBadge status={mod.status} />
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-3">
            {project.github_urls && (
              <div>
                <h2 className="text-xl font-semibold">GitHub Repositories</h2>
                <div className="space-y-3">
                  {project.github_urls.map((repo, i) => (
                    <div
                      key={i}
                      className="border rounded-md p-4 flex flex-col"
                    >
                      {repo.name && (
                        <h3 className="text-xl font-semibold mb-3">
                          {repo.name}
                        </h3>
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
              </div>
            )}

            {project.npm_urls && (
              <div>
                <h2 className="text-xl font-semibold">NPM Packages</h2>
                <div className="space-y-3">
                  {project.npm_urls.map((repo, i) => (
                    <div
                      key={i}
                      className="border rounded-md p-4 flex flex-col"
                    >
                      {repo.name && (
                        <h3 className="text-xl font-semibold mb-3">
                          {repo.name}
                        </h3>
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
              </div>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
