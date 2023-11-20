import { Container } from "./styles";
import { MainButton } from "../MainButton";

export function Home() {
  return (
    <Container>
      <div className="text-button-image-container">
        <div className="text-button-container">
          <div className="text-container">
            Dental Excellence Starts Here: Your Guide to a Brighter, Healthier
            Smile
          </div>

          <div className="button-wrapper">
            <MainButton title="Booking Now"></MainButton>
            <div className="svg-button">
              <img
                src="/public/assets/main-button-images/Subtract.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="image-container">
          <img src="/public/assets/home-images/mulher.png" alt="" />
        </div>
      </div>
    </Container>
  );
}
