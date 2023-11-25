import styled, { css } from 'styled-components'

type StyledItemPropsType = {
  itemColor: string
}

export const ItemStyled = styled.div<StyledItemPropsType>`
  width: 300px;
  border-radius: 15px;
  background: ${(props) => props.itemColor};
  padding: 10px 0px;

  &:hover {
    background: transparent;
    border: 2px solid ${(props) => props.itemColor};
  }
`
