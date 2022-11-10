import {useContext} from 'react'
import { StyledHeader } from '../../styled/HeaderStyle'
import ActiveSign from '../signs/ActiveSign'
import DefaultSign from '../signs/DefaultSign'
import OpenSign from '../signs/OpenSign'
import Paragraph from './para/Paragraph'
import { MyContext } from '../../context/AppContext'

const Header = () => {
  const {appCheckedData, appActive} = useContext(MyContext);
  const [isActive, setIsActive] = appActive;
  const [checkedArray] = appCheckedData;

  return (
    <StyledHeader isActive={isActive}>
        <Paragraph checkedArray={checkedArray} isActive={isActive} /> 
        { !isActive && checkedArray.length === 0 && <DefaultSign setIsActive={setIsActive} /> }
        { !isActive && checkedArray.length > 0 && <ActiveSign setIsActive={setIsActive} /> }
        {  isActive && <OpenSign setIsActive={setIsActive} /> } 
    </StyledHeader>
  )
}
export default Header