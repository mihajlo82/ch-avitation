import {  StyledList } from '../../styled/ListStyled';
import ListItem from './ListItem'; 
import useList from './useList';

const List = () => {
  const {data, manipArray, toggleCheckOnChange} = useList();

  return <StyledList> {data.length > 0 && data.map(item => <ListItem manipArray={manipArray} toggleCheckOnChange={toggleCheckOnChange} key={item.id} item={item} /> )} </StyledList>;
};

export default List
