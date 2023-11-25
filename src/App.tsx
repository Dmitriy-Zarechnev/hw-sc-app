import styled from 'styled-components'
import Item from './components/item/Item'

function App() {
  return (
    <div>
      <Container>
        <Item
          itemColor={'#030f0e'}
          headerColor={'#b80b0b'}
          textType="italic"
          firstBtnType="see"
          secondBtnType="save"
        ></Item>
        <Item
          itemColor={'#3c5238'}
          headerColor={'#0b42b8'}
          textType="italic"
          firstBtnType="see"
          secondBtnType="save"
        ></Item>
        <Item
          itemColor={'#a79c07'}
          headerColor={'#4bb80b'}
          textType="normal"
          firstBtnType="see"
          secondBtnType="save"
        ></Item>
      </Container>
    </div>
  )
}

export default App

const Container = styled.div`
  margin: 50px auto;
  padding: 20px;
  width: 1500px;
  display: flex;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`
