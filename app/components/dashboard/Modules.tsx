import { ProjectType } from "@/app/typed";
import StatusBadge from "../StatusBadge";

export default function Modules({ project }: { project: ProjectType }) {
  return (
    <>
      {project.modules && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-3" data-aos="fade-up">
            Modules
          </h2>
          <div className="space-y-3">
            {project.modules.map((mod, i) => (
              <div
                key={i}
                className="border rounded-md p-4 flex justify-between items-center  bg-stone-950 border-teal-600"
                data-aos="fade-up"
              >
                <div>
                  <p className="text-lg font-medium" data-aos="fade-up">
                    {mod.name}
                  </p>
                  {mod.description && (
                    <p className="text-sm text-gray-600" data-aos="fade-up">
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
    </>
  );
}
