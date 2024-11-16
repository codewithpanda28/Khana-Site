import Image from "next/image";


import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import NavMain from "./components/NavMain";
import OurUnique from "./components/OurUnique";

export default function Home() {
  return (
    <>
<NavMain/>
<OurUnique/>
 <Hero3/>
 <Hero4/>
 <Hero5/>
 </>

  );
}
