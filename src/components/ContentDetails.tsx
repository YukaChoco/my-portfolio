import type { Content } from '@/types/global';
import Image from 'next/image'
import Link from 'next/link';

type Props = {
  contentData: Content;
  key: number;
}

function ContentDetails({ contentData, key }: Props) {
  return (
    <div className='pt-28 pb-12 px-[5vw] grid grid-cols-1 md:grid-cols-2  gap-4'>
      <div className='mb-4 md:my-8 h-full w-full'>
      <Image className="object-contain max-h-80 h-full w-fit m-auto drop-shadow-2xl" src={contentData.img} alt="" quality={100} width={500} height={500}></Image>
      </div>
      <div className='relative h-fit bg-white/50 p-8 z-10'>
        <div className={"absolute border-2 right-12 top-8 py-1 px-3 rounded-3xl uppercase w-fit tracking-wide text-base " + (contentData.type=="team"?"text-indigo-500":"text-yellow-400") + " " + (contentData.type=="team"?"border-indigo-500":"border-yellow-400") + " font-bold"}>{contentData.type}</div>
        <h2 className='pt-8 text-3xl font-bold border-b-2 border-black'>{contentData.theme}</h2>
        <div className='pt-2 pl-2'>{contentData.detail}</div>
        <Link href={typeof contentData.link=="string"?contentData.link:"/Contents"}>{contentData.link}</Link>
      </div>
    </div>
  );
}

export default ContentDetails;
