import { ModuleStatus } from "../typed";

export default function StatusBadge({ status }: { status: ModuleStatus }) {
  const colors: Record<ModuleStatus, string> = {
    Working: "bg-green-600",
    Partially: "bg-yellow-500",
    NotImplemented: "bg-red-500",
    Deprecated: "bg-gray-500",
    Planned: "bg-blue-500",
  };

  return (
    <span
      className={`text-white px-3 py-1 rounded-full text-xs font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}
