import ContentsCard from '@/components/ContentsCard';
import Header from '../components/Header';
import contentData from '../data/contents'

function Contents() {
  return (
    <div className='w-full bg-zinc-100 min-h-screen h-fit'>
      <Header></Header>
      <div className='pt-16 pb-12 px-[10vw]'>
        {contentData.map((item, i) => {
          return (
            <div
              key={i}>
              <ContentsCard
                contentData={item}
              ></ContentsCard>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contents;
