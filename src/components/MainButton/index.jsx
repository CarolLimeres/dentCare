import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function MainButton({ title, ...rest }) {
  return (
    <Container type="button">
      {title} <img src="../../../public/assets/Vector.svg" alt="" />
    </Container>
  );
}
