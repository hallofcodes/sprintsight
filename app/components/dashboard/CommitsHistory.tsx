export default function CommitsHistory({
  commits,
}: {
  commits: { date: string; commit: string }[] | undefined;
}) {
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
    <>
      {commits && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-3" data-aos="fade-up">
            Commits History
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commits.map((mod, i) => (
              <div
                key={i}
                className="border rounded-md p-3 shadow-sm bg-stone-950 border-teal-600"
                data-aos="fade-up"
              >
                <h4 className="font-medium" data-aos="fade-up">
                  {mod.commit}
                </h4>
                <p className="text-sm text-gray-600" data-aos="fade-up">
                  {timeAgo(mod.date)}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
