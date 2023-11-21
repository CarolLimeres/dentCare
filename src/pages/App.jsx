import { Container } from "./styles";
import { Menu } from "../components/Menu";
import { Home } from "../components/Home";
import { CardHome } from "../components/CardHome";
import { CardServices } from "../components/CardServices";

export function App() {
  return (
    <Container>
      <Menu></Menu>
      <Home></Home>
      <div className="cards-home">
        <div className="first-second-card">
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
        </div>

        <div className="third-fourth-card">
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
      </div>
      <div className="services-title-container">
        <div className="services-satisfy">Satisfy Solution</div>
        <div className="services-best">The Best Dental Treatment</div>
      </div>
      <div className="cardservices-container">
        <CardServices
          // pra passar uma cor diferente p cada componente eu crio uma propriedade
          // q passo com uma classe e essa classe eu estilizo como quiser (com a cor q eu quiser)
          // e passo p propriedade o nome dessa classe
          backgroundClass="yellow"
          title="Teeth
        Whitening"
          text="Cosmetic treatment to enhance the whiteness of teeth"
          buttonText="Read More"
          image="../../public/assets/card-services-images/image1.png"
        ></CardServices>
        <CardServices
          backgroundClass="pink"
          title="Dental Implant"
          text="Surgical placement of artificial tooth roots"
          buttonText="Read More"
          image="../../public/assets/card-services-images/image2.png"
        ></CardServices>
        <CardServices
          backgroundClass="green"
          title="Teeth
        Fillings"
          text="Restorative procedures to repair cavities and damaged teeth"
          buttonText="Read More"
          image="../../public/assets/card-services-images/image3.png"
        ></CardServices>
        <CardServices
          backgroundClass="pink"
          title="Oral
        Surgery"
          text="Surgical procedures, including extractios and dental implants"
          buttonText="Read More"
          image="../../public/assets/card-services-images/image4.png"
        ></CardServices>
        <CardServices
          backgroundClass="green"
          title="Crown and
        Bridges"
          text="Restoration options for damaged or missing teeth"
          buttonText="Read More"
          image="../../public/assets/card-services-images/image5.png"
        ></CardServices>
        <CardServices
          backgroundClass="yellow"
          title="Periodontal
        Care"
          text="Services for gum health, including scalling and root planing"
          buttonText="Read More"
          image="../../public/assets/card-services-images/image6.png"
        ></CardServices>
      </div>
    </Container>
  );
}
