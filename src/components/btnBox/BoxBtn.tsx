import { MainBtn } from '../btn/Btn.styled'
import { BtnBox } from './BtnBox.styled'

type StyledBoxBtnPropsType = {
  firstBtnType: 'see' | 'save'
  secondBtnType: 'save' | 'see'
}

function BoxBtn(props: StyledBoxBtnPropsType) {
  return (
    <div>
      <BtnBox>
        <MainBtn btnType={props.firstBtnType}>
          See More
        </MainBtn>
        <MainBtn btnType={props.secondBtnType}>
          Save
        </MainBtn>
      </BtnBox>
    </div>
  )
}
export default BoxBtn
