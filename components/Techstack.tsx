import Skillstab from "./Skilltab";

export default function Techstack(){

    return(
        <>
        <div className="mt-8">
            <h2 className="font-bold text-4xl tracking-wide mb-2 text-white" >My Skills</h2>
        </div>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 sm:gap-4 md:gap-6">
            <Skillstab title="JavaScript" imgLink="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"/>
            <Skillstab title="React" imgLink="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>
            <Skillstab title="Tailwind" imgLink="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"/>
            <Skillstab title="ShadCn" imgLink="https://res.cloudinary.com/ddmkgyib4/image/upload/v1747466850/shadcn_lpoo6m.png"/>
            <Skillstab title="Next.js" imgLink="https://res.cloudinary.com/ddmkgyib4/image/upload/v1747466387/nextjs_nmp4fd.png"/>
            <Skillstab title="Node.js" imgLink="https://cdn.iconscout.com/icon/free/png-512/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=512"/>
            <Skillstab title="MongoDB" imgLink="https://www.svgrepo.com/show/331488/mongodb.svg"/>
            <Skillstab title="Postgres" imgLink="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"/>
            <Skillstab title="Prisma" imgLink="https://res.cloudinary.com/ddmkgyib4/image/upload/v1747466850/primsa_logo_wmeeo2.png"/>
        </div>
        </>
    )
}