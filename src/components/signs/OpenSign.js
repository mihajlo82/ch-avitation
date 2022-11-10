import { StyledSignMinus } from '../../styled/SignsStyled'
import RemoveIcon from '@mui/icons-material/Remove';

const OpenSign = ({setIsActive}) => {
  return (
    <StyledSignMinus>
        <RemoveIcon onClick={()=> setIsActive(prev => !prev)} />
    </StyledSignMinus>
  )
}

export default OpenSign

OpenSign.defaultProps = {
  setIsActive: ()=>{}
}