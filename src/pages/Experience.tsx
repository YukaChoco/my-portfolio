import DisplayContent from '@/components/DisplayContent';
import Header from '../components/Header';
import experienceData from '../data/experience'

function Experience() {
  return (
    <div className='w-full bg-zinc-100 min-h-full'>
      <Header></Header>
      <div className='px-72'>
        <DisplayContent contentData={experienceData}></DisplayContent>
      </div>
    </div>
  )
}

export default Experience;
