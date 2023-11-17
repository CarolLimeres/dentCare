import { Container } from "./styles";
import { Menu } from "../components/Menu";
import { Home } from "../components/Home";

export function App() {
  return (
    <Container>
      <Menu></Menu>
      <Home></Home>
    </Container>
  );
}
