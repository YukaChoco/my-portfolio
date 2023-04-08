import Link from "next/link";
import Image from 'next/image';
import profileImage from "../images/profile_img.png";
import HomeButton from "@/components/HomeButton";
import { useEffect, useState } from "react";

function Home() {

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    }
  }, []);

  return (
    <div className='relative text-center w-screen h-screen bg-gray-100'>
      <div className="absolute h-screen w-fit z-0 left-[10vw] right-[10vw]">
        <Image
          alt="ProfileImage"
          src={profileImage}
          placeholder="blur"
          quality={100}
          className={"object-contain h-full w-fit "+(windowSize.height/windowSize.width>0.6?"opacity-50":"")}
        />
      </div>
      <div className="absolute right-[10vw] pl-[10vw] h-screen w-fit grid grid-rows-2 z-50 py-[20vh]">
        <div className={'text-' + (windowSize.height/windowSize.width>0.6?"gray-500":"gray-600") + ' text-' + (windowSize.height/windowSize.width>1.3?"5xl":"[8vw]") +' align-middle font-bold rounded-2xl my-auto'}>
            My Portfolio
        </div>
        <div className="grid grid-rows-3">
        <HomeButton pageName="Profile"></HomeButton>
        <HomeButton pageName="Contents"></HomeButton>
        <HomeButton pageName="Experience"></HomeButton>
        </div>
      </div>
    </div>
  )
}

export default Home;