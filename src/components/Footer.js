import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/d%C6%B0%C6%A1ng-ng%C3%B4-ho%C3%A0ng-h%E1%BA%A3i-36b229387/"><img src={navIcon1} alt="Icon" /></a>
<a href="https://github.com/HaiDuong123?tab=repositories"><img src={navIcon2} alt="GitHub" className="github-icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Kỹ Thuật Phần Mềm</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
