import Link from "next/link";
import Image from 'next/image';
import profileImage from "../images/profile_img.png";
import HomeButton from "@/components/HomeButton";

function Home() {
  return (
    <div className='text-center w-full h-screen bg-gray-100'>
      Homeです
      <div className="fixed bottom-0 left-[10vw] h-full w-[100vh] z-0">
        <Image
          alt="ProfileImage"
          src={profileImage}
          placeholder="blur"
          quality={100}
          fill
          sizes="20vw"
        />

      </div>
      <div className="relative z-50">
        <HomeButton pageName="Profile"></HomeButton>
        <HomeButton pageName="Contents"></HomeButton>
        <HomeButton pageName="Experience"></HomeButton>
      </div>
    </div>
  )
}

export default Home;