
export default function Skillstab({imgLink, title }: {
    imgLink: string,
    title: string
}){
    return (
        <>
            <div className=" bg-zinc-800 p-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative flex items-center justify-center">
                    <div className="w-2/3 h-2/3 flex items-center">
                        <img className="rounded-md" src={imgLink}/>
                    </div>
                </div>
                <p className="text-center text-[16px] sm:text-xs md:text-sm font-medium text-zinc-100">{title}</p>
            </div>
        </>
    )
}