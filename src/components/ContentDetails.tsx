import img from '../../public/tidyIconImg.jpeg'
import Image from 'next/image'

function ContentDetails() {
  return (
    <div className='h-screen pt-28 pb-12 px-[10vw] grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
      <Image className="my-auto max-h-96 h-full w-full object-contain" src={img} alt="" width={200} height={200}></Image>
    </div>
  );
}

export default ContentDetails;
