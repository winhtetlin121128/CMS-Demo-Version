import Image from "next/image";
import Menubar from './components/navbar';
import Intro from './components/intro';
import Process from "./components/process";

export default function Home() {
  return (
    <div>
      <Menubar />
      <Intro />
      <Process />
    </div>
  );
}
