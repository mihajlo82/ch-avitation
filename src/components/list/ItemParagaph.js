import { ItemPara } from '../../styled/ListStyled'

const ItemParagaph = ({name}) => <ItemPara> {name} </ItemPara>

export default ItemParagaph

ItemParagaph.defaultProps = {
  name: 'Title'
}