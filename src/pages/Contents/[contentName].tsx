import DisplayContent from '@/components/DisplayContent';
import Header from '../../components/Header';
import ContentDetails from '../../components/ContentDetails'
import { useRouter } from 'next/router';
import { Content } from "@/types/global";
import Data from '../../data/contents';

function Contents() {
  const router = useRouter();
  const contentName = router.query.contentName as string;
  const contentData: Content[] = Data.filter(content => content.theme === contentName);

  if (contentData[0] !== undefined) {
    return (
      <div className='w-full bg-zinc-100 min-h-screen h-fit'>
        <Header></Header>
        {contentData.map((item,index)=>{
          return(
            // <div>{item.theme}</div>
            <ContentDetails contentData={item}></ContentDetails>
          )
        })}
      </div>
    );
  }
  else {
    return (
      <div className='bg-gray-200 w-screen h-screen text-center flex'>
        <span className='m-auto w-fit h-fit'>
          ー URLが間違っています ー
        </span>
      </div>
    )
  }
}

export default Contents;