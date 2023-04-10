import ContentsCard from '@/components/ContentsCard';
import Header from '../components/Header';
import contentData from '../data/contents'

function Contents() {
  return (
    <div className='w-full bg-zinc-100 min-h-screen'>
      <Header></Header>
      <div className='px-[10vw]  py-28'>
        {contentData.map((item,i)=>{
          return(
            <ContentsCard
              theme={item.theme}
              img={item.img}
              type={item.type}
              detail={item.detail}
            ></ContentsCard>
          )
        })}
      </div>
    </div>
  )
}

export default Contents;
