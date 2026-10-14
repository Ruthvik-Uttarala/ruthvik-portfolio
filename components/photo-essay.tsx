import Image from "next/image";
import { photos } from "@/data/photos";
export function PhotoEssay(){return <div className="photo-essay">{photos.map(photo=><figure key={photo.src}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width:800px) 90vw, 50vw"/><figcaption>{photo.caption}</figcaption></figure>)}<p className="photo-note">I like the parts of life that resist optimization: a stadium at dusk, a new city, a photograph made because the moment felt worth keeping. <a href="https://www.instagram.com/ruuttarala/">A few more live on Instagram ↗</a></p></div>}
