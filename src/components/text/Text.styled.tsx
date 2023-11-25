import styled, { css } from 'styled-components'
import { myTheme } from '../../styled/Theme.styled'

type StyledTextPropsType = {
  textType: 'italic' | 'normal'
}
export const MainText = styled.div<StyledTextPropsType>`
  color: ${myTheme.colors.text};
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 20px;

  ${(props) =>
    props.textType === 'italic' &&
    css<StyledTextPropsType>`
      font-style: italic;
      font-weight: 700;
    `}

  ${(props) =>
    props.textType === 'normal' &&
    css<StyledTextPropsType>`
      font-style: normal;
      font-weight: 400;
    `}
`
