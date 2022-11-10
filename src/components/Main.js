import { useContext, lazy, Suspense } from 'react';
import { Select } from '../styled/Styled';
import { MyContext } from '../context/AppContext';
import Header from './header/Header';

//Lazy load import
const List = lazy(() => import('./list/List'));

const Main = () => {
  const {appActive} = useContext(MyContext);
  const [isActive] = appActive;

  return (
      <Select>
          <Header />
          
          {isActive &&
            <Suspense fallback={<article>Loading list...</article>}>
               <List />
            </Suspense>
          }
      </Select>
  )
}

export default Main