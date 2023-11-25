import styled, { css } from 'styled-components'
import { MyAnimation } from '../../styled/animation/Animations'
import { myTheme } from '../../styled/Theme.styled'

type StyledBtnPropType = {
  btnType: 'see' | 'save'
}

export const MainBtn = styled.button<StyledBtnPropType>`
  border-radius: 5px;
  width: 86px;
  height: 30px;
  margin-right: 12px;
  border: none;
  cursor: pointer;

  &:last-child {
    margin-right: 0px;
  }

  // see
  ${(props) =>
    props.btnType === 'see' &&
    css<StyledBtnPropType>`
      background: ${myTheme.colors.btn.btnColor};
      color: ${myTheme.colors.primary};

      &:hover {
        color: ${myTheme.colors.secondary};
        background: ${myTheme.colors.btn.btnSeeHover};
        animation: ${MyAnimation} 3s ease-in-out;
      }
    `}

  // save
  ${(props) =>
    props.btnType === 'save' &&
    css<StyledBtnPropType>`
      background: transparent;
      color: ${myTheme.colors.btn.btnColor};
      border: 2px solid ${myTheme.colors.btn.btnColor};

      &:hover {
        border: 2px solid ${myTheme.colors.btn.btnSaveHover};
        color: ${myTheme.colors.btn.btnSaveHover};
      }
    `}
`
