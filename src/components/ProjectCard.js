/*import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
*/
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tech, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div 
        className="proj-imgbx" 
        onClick={onClick} 
        style={{ cursor: "pointer" }}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {tech && <p style={{ fontSize: "0.9rem", marginTop: "5px" }}>🛠 {tech.join(", ")}</p>}
        </div>
      </div>
    </Col>
  );
};

