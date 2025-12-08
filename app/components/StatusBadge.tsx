import { ModuleStatus } from "../typed";

export default function StatusBadge({ status }: { status: ModuleStatus }) {
  const colors: Record<ModuleStatus, string> = {
    Working: "bg-green-400",
    Partially: "bg-yellow-400",
    NotImplemented: "bg-red-400",
    Deprecated: "bg-gray-400",
    Planned: "bg-blue-400",
  };

  return (
    <span
      className={`text-white px-3 py-1 rounded-full text-xs font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}
