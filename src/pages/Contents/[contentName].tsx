import DisplayContent from '@/components/DisplayContent';
import Header from '../../components/Header';
import experienceData from '../../data/experience'
import { useRouter } from 'next/router';

function Content() {
  const router = useRouter();
  const contentName = router.query.contentName as string;
  return (
    <div>
      {contentName}
    </div>
    // <ul>
    //   {contentsName.map(post => (
    //     <li>{post}</li>
    //   ))}
    // </ul>
  );
}

export default Content;