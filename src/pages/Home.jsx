import { Container } from "./styles";
import { Menu } from "../components/Menu";
import { MainButton } from "../components/MainButton";

export function Home() {
  return (
    <Container>
      <Menu></Menu>
      <div className="text-button-image-container">
        <div className="text-button-container">
          <div className="text-container">
            Dental Excellence Starts Here: Your Guide to a Brighter, Healthier
            Smile
          </div>

          <div className="button-wrapper">
            <MainButton title="Booking Now"></MainButton>
            <div className="svg-button">
              <img src="../../public/assets/Subtract.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="image-container">
          <img src="/public/assets/mulher.png" alt="" />
        </div>
      </div>
    </Container>
  );
}
