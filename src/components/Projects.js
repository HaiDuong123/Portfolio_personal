/*import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

  const projects = [
    {
      title: "Vy Food – Đặt Món Ngon Online | Giao Nhanh, Giá Tốt Mỗi Ngày",
      description: "Vy Food mang đến hàng trăm món ăn ngon, giao nhanh tận nơi. Thưởng thức hương vị chuẩn quán tại nhà – đặt ngay để nhận ưu đãi hấp dẫn hôm nay!",
      imgUrl: projImg1,
      link: "https://github.com/HaiDuong123/Web_vy_food"

      
      
    },
    {
      title: "Web investment",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://github.com/HaiDuong123/web_investment"
    },
    {
      title: "Web calculator investor",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://github.com/HaiDuong123/web_invester"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Other Project</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}*/
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

export const Projects = () => {

  const projects = [
    {
      title: "Vy Food – Đặt Món Ngon Online",
      description: "Vy Food mang đến hàng trăm món ăn ngon, giao nhanh tận nơi.",
      imgUrl: projImg1,
      tech: ["React", "Bootstrap", "Node.js"],
      objective: "Xây dựng nền tảng đặt món trực tuyến tối ưu trải nghiệm người dùng.",
      role: "Front-end Developer – Thiết kế giao diện, kết nối API, responsive UI.",
      link: "https://github.com/HaiDuong123/Web_vy_food",
      demo: "https://hai-duong-vyfood-demo.vercel.app"
    },
    {
      title: "Web Investment",
      description: "Trang web hỗ trợ đầu tư và tính toán lợi nhuận.",
      imgUrl: projImg2,
      tech: ["React", "Chart.js"],
      objective: "Hỗ trợ người dùng quản lý danh mục đầu tư hiệu quả.",
      role: "Fullstack Developer – xây dựng UI và xử lý dữ liệu tài chính.",
      link: "https://github.com/HaiDuong123/web_investment",
      demo: "#"
    },
    {
      title: "Web Calculator Investor",
      description: "Ứng dụng tính toán tỷ suất sinh lời đầu tư.",
      imgUrl: projImg3,
      tech: ["HTML", "CSS", "JavaScript"],
      objective: "Cung cấp công cụ giúp nhà đầu tư nhanh chóng ước tính lợi nhuận.",
      role: "Front-end Developer – xây dựng giao diện và logic tính toán.",
      link: "https://github.com/HaiDuong123/web_invester",
      demo: "#"
    }
  ];

  // Trạng thái modal
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Other Project</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => setSelectedProject(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <p>Đang cập nhật...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal chi tiết dự án */}
      <Modal show={!!selectedProject} onHide={() => setSelectedProject(null)} centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedProject.imgUrl} alt={selectedProject.title} className="img-fluid mb-3 rounded" />
              <p><strong>Mô tả:</strong> {selectedProject.description}</p>
              <p><strong>Mục tiêu:</strong> {selectedProject.objective}</p>
              <p><strong>Vai trò:</strong> {selectedProject.role}</p>
              <p><strong>Công nghệ:</strong> {selectedProject.tech.join(", ")}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setSelectedProject(null)}>Đóng</Button>
              <Button variant="primary" href={selectedProject.link} target="_blank">GitHub</Button>
              {selectedProject.demo !== "#" && (
                <Button variant="success" href={selectedProject.demo} target="_blank">Xem Demo</Button>
              )}
            </Modal.Footer>
          </>
        )}
      </Modal>

      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

