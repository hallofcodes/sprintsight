import { ProjectType } from "@/app/typed";
import Link from "next/link";

export default function Links({ project }: { project: ProjectType }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-3">
      {project.github_urls && (
        <div>
          <h2 className="text-xl font-semibold mb-3" data-aos="fade-up">
            GitHub Repositories
          </h2>
          <div className="space-y-3">
            {project.github_urls.map((repo, i) => (
              <div
                key={i}
                className="border rounded-md p-4 flex flex-col  bg-stone-950 border-teal-600"
                data-aos="fade-up"
              >
                {repo.name && (
                  <h3 className="text-xl font-semibold mb-3" data-aos="fade-up">
                    {repo.name}
                  </h3>
                )}
                {repo.description && (
                  <p data-aos="fade-up">{repo.description}</p>
                )}
                <Link
                  className="text-teal-600 underline"
                  href={repo.url}
                  target="_blank"
                  data-aos="fade-up"
                >
                  {repo.url}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.npm_urls && (
        <div>
          <h2 className="text-xl font-semibold mb-3" data-aos="fade-up">
            NPM Packages
          </h2>
          <div className="space-y-3">
            {project.npm_urls.map((repo, i) => (
              <div
                key={i}
                className="border rounded-md p-4 flex flex-col  bg-stone-950 border-teal-600"
                data-aos="fade-up"
              >
                {repo.name && (
                  <h3 className="text-xl font-semibold mb-3" data-aos="fade-up">
                    {repo.name}
                  </h3>
                )}
                {repo.description && (
                  <p data-aos="fade-up">{repo.description}</p>
                )}
                <Link
                  className="text-teal-600 underline"
                  href={repo.url}
                  target="_blank"
                  data-aos="fade-up"
                >
                  {repo.url}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
