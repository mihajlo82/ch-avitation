import { useContext } from 'react';
import { MyContext } from '../../context/AppContext';

const useList = () => {
    const {appData, appCheckedData} = useContext(MyContext);
    const [data] = appData;
    const [checkedArray, setCheckedArray] = appCheckedData; 

    //Array stored checked list items and check is ch
    const manipArray = (item, setActiveBox ) =>{
        const existElem = checkedArray.findIndex(el => el.id === item.id);
    
        if(existElem !== -1) setCheckedArray([...checkedArray].filter(el => el.id !== item.id));
        else{
          setActiveBox(true)
          setCheckedArray([...checkedArray, item]);
        }
    }

    //Toggle checkbox on individual list item
    const toggleCheckOnChange = (item, setActiveBox) => { 
        const isTrue = checkedArray.some( el => el.id === item.id); 
    
        if(isTrue) setActiveBox(true);
        else setActiveBox(false);
    }
  
    return {data, manipArray, toggleCheckOnChange}
}

export default useList