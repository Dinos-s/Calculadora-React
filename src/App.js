import { Container, Content, Row } from "./styles";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

function App() {
  return (
    <Container className="App">
      <Content>
        <Input/>
        <Row/>
        <Button/>
      </Content>
    </Container>
  );
}

export default App;
