import Link from "next/link";
import Image from 'next/image';
import profileImage from "../images/profile_img.png";
import HomeButton from "@/components/HomeButton";

function Home() {
  return (
    <div className='text-center w-screen h-screen bg-gray-100 grid grid-cols-5 grid-rows-1 px-[5vw]'>
      <div className="h-screen z-0 col-start-1 col-span-3 row-start-1">
        <Image
          alt="ProfileImage"
          src={profileImage}
          placeholder="blur"
          quality={100}
          className="object-contain h-full"
        />

      </div>
      <div className="z-50 col-start-3 col-span-3 row-start-1 justify-center grid grid-row-2 py-[10vh]">
        <div className='relative text-gray-600 text-5xl font-bold rounded-2xl'>
          <div className="absolute w-fit h-fit bottom-[5vh]">
            My Portfolio
          </div>
        </div>
        <div className="grid grid-rows-3 pt-[10vh] content-center">
          <HomeButton pageName="Profile"></HomeButton>
          <HomeButton pageName="Contents"></HomeButton>
          <HomeButton pageName="Experience"></HomeButton>
        </div>
      </div>
    </div>
  )
}

export default Home;