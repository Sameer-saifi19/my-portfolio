import { Button } from "./ui/button";
import GithubIcon from "./ui/Github";
import LinkedinIcon from "./ui/LinkedIn";
import ResumeIcon from "./ui/ResumeIcon";
import TwitterIcon from "./ui/TwitterIcon";

export default function Buttongroups() {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mt-4">
      <Button
        className="flex items-center justify-center gap-2 px-4 py-2 text-md font-medium text-zinc-200 border border-zinc-400 rounded-md hover:bg-zinc-700 cursor-pointer transition-colors duration-200"
        variant={"outline"}
      >
        {<ResumeIcon />}Resume
      </Button>
      <Button
        className="flex items-center justify-center gap-2 px-4 py-2 text-md font-medium text-zinc-200 border border-zinc-400 rounded-md hover:bg-zinc-700 cursor-pointer transition-colors duration-200"
        variant={"outline"}
      >
        {<GithubIcon />}GitHub
      </Button>
      <Button
        className="flex items-center justify-center gap-2 px-4 py-2 text-md font-medium text-zinc-200 border border-zinc-400 rounded-md hover:bg-zinc-700 cursor-pointer transition-colors duration-200"
        variant={"outline"}
      >
        {<LinkedinIcon />}LinkedIn
      </Button>
      <Button
        className="flex items-center justify-center gap-2 px-4 py-2 text-md font-medium text-zinc-200 border border-zinc-400 rounded-md hover:bg-zinc-700 cursor-pointer transition-colors duration-200"
        variant={"outline"}
      >
        {<TwitterIcon />}X
      </Button>
    </div>
  );
}
