import { StyledSignActive } from '../../styled/SignsStyled'
import CloseIcon from '@mui/icons-material/Close';

const ActiveSign = ({setIsActive}) => {
  return (
    <StyledSignActive>
        <CloseIcon onClick={()=> setIsActive(prev => !prev)} />
    </StyledSignActive>
  )
}

export default ActiveSign

ActiveSign.defaultProps = {
  setIsActive: ()=>{}
}