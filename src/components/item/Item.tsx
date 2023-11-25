import { ItemStyled } from './Item.styled'
import UpPart from '../itemUpPart/UpPart'
import DownPart from '../itemDownPart/DownPart'

type StyledItemPropsType = {
  itemColor: string
  headerColor: string
  textType: 'italic' | 'normal'
  firstBtnType: 'see' | 'save'
  secondBtnType: 'save' | 'see'
}

function Item(props: StyledItemPropsType) {
  return (
    <div>
      <ItemStyled itemColor={props.itemColor}>
        <UpPart></UpPart>
        <DownPart
          headerColor={props.headerColor}
          textType={props.textType}
          firstBtnType={props.firstBtnType}
          secondBtnType={props.secondBtnType}
        ></DownPart>
      </ItemStyled>
    </div>
  )
}

export default Item
