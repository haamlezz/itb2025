import Image from "next/image";
import meme from "./images/meme.jpg";
export default function Home() {
  return (
    <>

      <h1>I love you!</h1>
      <h2>ManU Kark</h2>
      <h3>ສາວໆຫ້ອງ ITB ງາມ</h3>

      <Image src={meme} width={200} height={500} alt="meme project" />
    </>
  );
}
