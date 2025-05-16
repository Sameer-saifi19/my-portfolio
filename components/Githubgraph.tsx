/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */

export default function Githubgraph() {
  return (
    <section className="py-10">
      <h2 className="text-xl font-semibold text-zinc-300 mb-4">My GitHub Contributions</h2>
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="https://github-readme-activity-graph.vercel.app/graph?username=Sameer-saifi19&theme=github-compact"
        alt="GitHub Contribution Graph"
        className="shadow-md"
      />
    </section>
  );
}
