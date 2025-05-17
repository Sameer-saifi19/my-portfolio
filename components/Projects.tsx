import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="mt-16">
        <div>
          <h2 className="font-bold text-4xl tracking-wide mb-2 text-white">
            Featured Projects
          </h2>
        </div>
        <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href={"https://google.com"}
            className="group p-4 rounded-lg border border-zinc-200 hover:border-white transition-all duration-300 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-zinc-300 mb-2 group-hover:text-white transition-colors">
              Dice DB
            </h3>
            <p className="text-sm text-zinc-400 mb-3 line-clamp-2">Contributed to DiceDB, a distributed key-value store database system.</p>
            <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Go</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Distributed Systems</span>
            </div>
          </Link>
          <Link
            href={"https://google.com"}
            className="group p-4 rounded-lg border border-zinc-200 hover:border-white transition-all duration-300 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-zinc-300 mb-2 group-hover:text-white transition-colors">
              CRedis
            </h3>
            <p className="text-sm text-zinc-400 mb-3 line-clamp-2">Built a basic Redis implementation in C featuring key-value store, multiplexing for multiple clients, and command parsing using socket programming.</p>
            <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">C</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">System Programming</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Socket Programming</span>
            </div>
          </Link>
          <Link
            href={"https://google.com"}
            className="group p-4 rounded-lg border border-zinc-200 hover:border-white transition-all duration-300 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-zinc-300 mb-2 group-hover:text-white transition-colors">
              100xDevs
            </h3>
            <p className="text-sm text-zinc-400 mb-3 line-clamp-2">Active contributor to 100xDevs community projects and learning initiatives.</p>
            <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">JavaScript</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">React</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">Node.js</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
