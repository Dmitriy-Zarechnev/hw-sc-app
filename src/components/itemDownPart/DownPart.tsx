import { Header } from '../header/Header.styled'
import { MainText } from '../text/Text.styled'
import { ItemDownPart } from './ItemDownPart.styled'
import BoxBtn from '../btnBox/BoxBtn'

type StyledDownPartPropsType = {
  headerColor: string
  textType: 'italic' | 'normal'
  firstBtnType: 'see' | 'save'
  secondBtnType: 'save' | 'see'
}

function DownPart(props: StyledDownPartPropsType) {
  return (
    <div>
      <ItemDownPart>
        <Header headerColor={props.headerColor}>
          Headline
        </Header>
        <MainText textType={props.textType}>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu
          ut. Sit molestie ornare in venen.
        </MainText>
        <BoxBtn
          firstBtnType={props.firstBtnType}
          secondBtnType={props.secondBtnType}
        ></BoxBtn>
      </ItemDownPart>
    </div>
  )
}
export default DownPart
