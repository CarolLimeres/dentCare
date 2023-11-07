import { Container } from "../Menu/styles";

export function Menu() {
  return (
    <nav>
      <Container>
        <li>
          <img src="../../../public/assets/57Dentcare.png" alt="" />
        </li>
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Why Choose Us</li>
        <li>Testimonials</li>
        <li>
          Contact Us <img src="../../../public/assets/Vector.svg" alt="" />
        </li>
      </Container>
    </nav>
  );
}
