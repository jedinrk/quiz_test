import Image from "next/image";
import EllipseOne from "../public/ellipselight.svg";
import NavBar from "./components/Navbar/NavBar";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <main>
      <Image className="absolute" src={EllipseOne} alt="" />
      <NavBar />
    </main>
  );
}
