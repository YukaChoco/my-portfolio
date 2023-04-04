import Link from "next/link";

function Home() {
  return (
    <div className='text-center w-full h-screen bg-zinc-100'>
      Homeです

      <ul>
        <li>
          <Link href="/Profile">
            Profile
          </Link>
        </li>
        <li>
          <Link href="Contents">
            Contents
          </Link>
        </li>
        <li>
          <Link href="/Experience">
            Experience
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;