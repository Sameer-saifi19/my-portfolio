import Link from "next/link";
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
        {<ResumeIcon />}<Link href={""}>Resume</Link>
      </Button>
      <Button
        className="flex items-center justify-center gap-2 px-4 py-2 text-md font-medium text-zinc-200 border border-zinc-400 rounded-md hover:bg-zinc-700 cursor-pointer transition-colors duration-200"
        variant={"outline"}
      >
        {<GithubIcon />}<Link href={"https://github.com/Sameer-saifi19"}>Github</Link>
      </Button>
      <Button
        className="flex items-center justify-center gap-2 px-4 py-2 text-md font-medium text-zinc-200 border border-zinc-400 rounded-md hover:bg-zinc-700 cursor-pointer transition-colors duration-200"
        variant={"outline"}
      >
        {<LinkedinIcon />}<Link href={"https://www.linkedin.com/in/sameer-s-590666301/"}>LinkedIn</Link>
      </Button>
      <Button
        className="flex items-center justify-center gap-2 px-4 py-2 text-md font-medium text-zinc-200 border border-zinc-400 rounded-md hover:bg-zinc-700 cursor-pointer transition-colors duration-200"
        variant={"outline"}
      >
        {<TwitterIcon />}<Link href={"https://x.com/im_Sameer_19"}></Link>
      </Button>
    </div>
  );
}
