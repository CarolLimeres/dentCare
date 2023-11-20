import { Container } from "./styles";
import { Menu } from "../components/Menu";
import { Home } from "../components/Home";
import { CardHome } from "../components/CardHome";

export function App() {
  return (
    <Container>
      <Menu></Menu>
      <Home></Home>
      <div className="cards-home">
        <CardHome
          image="../../public/assets/card-home-images/blue-service.svg"
          title="Free Consultation"
          text="We offer flexible appointment scheduling and free to accommodate your busy life"
        ></CardHome>
        <CardHome
          image="../../public/assets/card-home-images/red-doctor.svg"
          title="Expert Dentist"
          text="Our team of experienced dentists and dental professionals boasts years of expertise in various areas of dentistry"
        ></CardHome>
        <CardHome
          image="../../public/assets/card-home-images/green-star.png"
          title="High User Rating"
          text="We offer the latest techniques and materials for restoring damaged teeth, ensuring your dental health is fully optimized"
        ></CardHome>

        <CardHome
          image="../../public/assets/card-home-images/orange-chair.svg"
          title="Best Equipment"
          text="Our compassionate team is dedicated to making your dental experience as comfortable and stress-free as possible"
        ></CardHome>
      </div>
    </Container>
  );
}
