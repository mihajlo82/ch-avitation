import {useContext, useEffect, useState} from 'react'
import { MyContext } from '../../context/AppContext';

const useListItem = ({item, manipArray, toggleCheckOnChange}) => {
    const {appCheckedData} = useContext(MyContext);
    const [checkedArray] = appCheckedData;
    const [activeBox, setActiveBox] = useState(false);
    const [opacity, setOpacity] = useState(true);

    //Should opacity be applied to the list item
    const checkOpacity = () => {   
        if(checkedArray.length === 0 || checkedArray.length > 1) setOpacity(false); 
        else if(checkedArray.length === 1 && !!activeBox) setOpacity(false);
        else setOpacity(true);
        }

    //toggle checkbox active
    useEffect(() => toggleCheckOnChange(item, setActiveBox),  [manipArray]);
    
    //opacity check
    useEffect(() => checkOpacity(), [checkedArray, activeBox]);
  
  return {opacity, activeBox, setActiveBox}
}

export default useListItem