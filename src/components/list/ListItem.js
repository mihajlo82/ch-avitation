import { StyledItem } from '../../styled/ListStyled'
import Checkbox from '@mui/material/Checkbox';
import ItemParagaph from './ItemParagaph';
import useListItem from './useListItem';

const ListItem = ({item, manipArray, toggleCheckOnChange}) => {
  const {opacity, activeBox, setActiveBox} = useListItem({item, manipArray, toggleCheckOnChange})
  
  return (
    <StyledItem res={opacity} key={item.id}>
        <Checkbox 
            sx={{
                backgroundColor:'gray',
                overflow:'hidden',
                borderRadius: '0px',
                width:'10px',
                height:'10px',
                marginLeft:'10px',
                color: 'gray',
                '&.Mui-checked': {
                  color: 'red',
                },
                
              }}
              checked={activeBox && true}
              onChange={()=>manipArray(item, setActiveBox )}
              data-testid='chbox'
        />
        <ItemParagaph name={item.name} />
     </StyledItem>
  )
}

export default ListItem;

ListItem.defaultProps = {
  item:{
    id: Math.random(),
    name:'Name'
  },
  manipArray: ()=>{},
  toggleCheckOnChange: ()=>{}
}