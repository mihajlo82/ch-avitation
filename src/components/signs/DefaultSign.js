import { StyledSignPlus } from '../../styled/SignsStyled'
import AddIcon from '@mui/icons-material/Add';

const DefaultSign = ({setIsActive}) => { 
  return (
    <StyledSignPlus>
        <AddIcon data-testid="addicon" onClick={()=> setIsActive(prev => !prev)} />
    </StyledSignPlus>
  )
}

export default DefaultSign

DefaultSign.defaultProps = {
  setIsActive: ()=>{}
}