import { Container } from "./styles";

export function CardHome({ image, title, text }) {
  return (
    <Container>
      <div className="text-image-container">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="title-container">{title}</div>
        <div className="text-container">{text}</div>
      </div>
    </Container>
  );
}
