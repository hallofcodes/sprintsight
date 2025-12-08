import { ProjectType } from "@/app/typed";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className="flex gap-3">
      <div className="relative w-full max-w-[120px] aspect-3/2">
        {project.icon_url && (
          <Image
            src={project.icon_url}
            alt={project.name}
            fill
            className="object-contain"
            data-aos="fade-up"
          />
        )}
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2" data-aos="fade-up">
          {project.name}
        </h1>
        {project.description && <p data-aos="fade-up">{project.description}</p>}
        {project.url && (
          <Link
            href={project.url}
            target="_blank"
            className="text-teal-600 underline text-sm"
            data-aos="fade-up"
          >
            {project.url}
          </Link>
        )}
      </div>
    </div>
  );
}
