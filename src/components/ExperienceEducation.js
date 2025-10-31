import { Container, Row, Col, Card } from "react-bootstrap";

export const ExperienceEducation = () => {
  const education = [
    {
      school: "Đại học Văn Lang",
      major: "Kỹ thuật phần mềm",
      time: "2022 - 2026",
      description: "Tập trung học về phát triển web, AI và quản lý dự án phần mềm.",
    },
    {
      school: "Trường THPT Ngô Quyền Quận 7",
      major: "Ban Tự nhiên",
      time: "2018 - 2021",
      description: "",
    },
  ];

  const experience = [
    {
      company: "Công ty Hichina International Service Trading Company Limited",
      position: "Frontend Developer Intern",
      time: "10/2025 - 03/2026",
      description: "Phát triển giao diện web tích hợp hệ thống vận chuyển, tối ưu UX/UI.",
    },
   
  ];

  return (
    <section className="experience-education" id="experience">
      <Container>
        <h2 className="text-center mb-5">🎓 Kinh nghiệm & Học vấn</h2>
        <Row>
          <Col md={6}>
            <h4>🎓 Học vấn</h4>
            {education.map((edu, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Title>{edu.school}</Card.Title>
                  <Card.Subtitle className="text-muted">{edu.major}</Card.Subtitle>
                  <Card.Text>
                    <strong>Thời gian:</strong> {edu.time}
                    <br />
                    {edu.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col md={6}>
            <h4>💼 Kinh nghiệm làm việc</h4>
            {experience.map((exp, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Title>{exp.company}</Card.Title>
                  <Card.Subtitle className="text-muted">{exp.position}</Card.Subtitle>
                  <Card.Text>
                    <strong>Thời gian:</strong> {exp.time}
                    <br />
                    {exp.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
