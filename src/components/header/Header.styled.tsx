import styled from 'styled-components'

type StyledHeaderPropsType = {
  headerColor: string
}

export const Header = styled.div<StyledHeaderPropsType>`
  color: ${(props) => props.headerColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 20px;
`
