import { useEffect, useState } from "react";
import { Title, TitleParent } from "../../../styled/HeaderStyle"; 

const Paragraph = ({isActive, checkedArray}) => {
  const [stringNames, setStringNames] = useState('');

  //Stringfy array of names shown in header
  const stringifyName = () => {
      const tempArr = [...checkedArray].map(item => item.name);
      const expData = tempArr.toString();
      setStringNames(expData)
  }

   useEffect(()=> stringifyName(), [checkedArray])

  return (
      <TitleParent>
        <Title data-testid='initpara' isActive={isActive}> {checkedArray.length > 0 ? stringNames : 'Nothing checked!' } </Title> 
      </TitleParent>
  )
}

export default Paragraph

Paragraph.defaultProps = {
  isActive: false,
  checkedArray: []
}