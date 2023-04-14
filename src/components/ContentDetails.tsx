import { Content } from '@/types/global';
import Image from 'next/image'

type Props = {
  contentData: Content;
}

function ContentDetails({ contentData }: Props) {
  return (
    <div className='h-screen pt-28 pb-12 px-[10vw] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
      <Image className="my-auto max-h-96 h-full w-full object-contain" src={contentData.img} alt="" quality={100} width={500} height={500}></Image>
    </div>
  );
}

export default ContentDetails;
