import ContentsCard from '@/components/ContentsCard';
import Header from '../components/Header';
import contentData from '../data/contents'

function Contents() {
  return (
    <div className='w-full bg-zinc-100 min-h-screen h-fit'>
      <Header></Header>
      <div className='pt-16 pb-12 px-[10vw]'>
        {contentData.map((item,i)=>{
          return(
            <ContentsCard
              theme={item.theme}
              img={item.img}
              type={item.type}
              detail={item.detail}
              link={item.link}
            ></ContentsCard>
          )
        })}
      </div>
    </div>
  )
}

export default Contents;
