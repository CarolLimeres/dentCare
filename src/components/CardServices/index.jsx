import { Container } from "./styles";

export function CardServices({
  title,
  text,
  buttonText,
  image,
  backgroundClass,
}) {
  return (
    <Container className={backgroundClass}>
      <div className="text-button-image-container">
        <div className="text-button-container">
          <div className="title-container">{title}</div>
          <div className="text-container">{text}</div>
          <div className="button-container">
            <button type="button">{buttonText}</button>
          </div>
        </div>
        <div className="image-container">
          <img src={image} alt="" />
        </div>
      </div>
    </Container>
  );
}
