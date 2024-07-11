import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function YoutubeNavitem({navIcon, path, title})
{
    const [data, setData] = useState({
        path: "youtube/" + title
    })
    return(<>
        <Link href={data.path}>
            <section className="flex items-center">
                <img className="ml-1 h-6 w-6" src={"https://raw.githubusercontent.com/naejshaw/youtube-clone-grid/main/assets/" + navIcon + ".png"} alt=""/>
                <p className="ml-4 text-sm">{title}</p>
            </section>
        </Link>
    </>)
}
