import { ProjectType } from "@/app/typed";

export default function Scope({ project }: { project: ProjectType }) {
  return (
    <>
      {(project.scope_description || project.scope_list) && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-3" data-aos="fade-up">
            Scopes
          </h2>
          {project.scope_description && (
            <p className="mb-3" data-aos="fade-up">
              {project.scope_description}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.scope_list &&
              project.scope_list.map((mod, i) => (
                <div
                  key={i}
                  className="border rounded-md p-3 shadow-sm  bg-stone-950 border-teal-600"
                  data-aos="fade-up"
                >
                  <p className="font-medium" data-aos="fade-up">
                    {mod.title}
                  </p>

                  {mod.description && (
                    <p
                      className="text-sm text-gray-600 mt-1"
                      data-aos="fade-up"
                    >
                      {mod.description}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}
