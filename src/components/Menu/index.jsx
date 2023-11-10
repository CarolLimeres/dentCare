import { Container } from "../Menu/styles";

export function Menu() {
  return (
    <Container>
      <nav>
        <ul className="nav-list">
          <li>
            <img src="../../../public/assets/57Dentcare.png" alt="" />
          </li>
          <li>
            <ul className="link-list">
              <li>
                <a className="link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Services
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a className="link" href="/">
                  Testimonials
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a className="contact-button link" href="/">
              Contact Us <img src="../../../public/assets/Vector.svg" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
