import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Badge } from "react-bootstrap";

export const BlogSection = () => {
  // Danh sách bài viết mẫu
  const [posts, setPosts] = useState([
    { title: "Giới thiệu React Hooks", date: "2025-10-15", content: "Hooks giúp đơn giản hóa việc quản lý state và lifecycle trong React.", tags: ["React", "Frontend"] },
    { title: "Công nghệ Web hiện đại", date: "2025-10-12", content: "Tổng quan về xu hướng web 2025 với AI và tối ưu trải nghiệm người dùng.", tags: ["Công nghệ", "Web"] },
  ]);

  // Bộ lọc tag
  const [selectedTag, setSelectedTag] = useState("Tất cả");

  // Form thêm bài viết mới
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    tags: "",
  });

  // Xử lý khi submit bài viết
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content) return alert("Vui lòng nhập đầy đủ tiêu đề và nội dung!");

    const newEntry = {
      title: newPost.title,
      content: newPost.content,
      date: new Date().toISOString().split("T")[0],
      tags: newPost.tags ? newPost.tags.split(",").map(tag => tag.trim()) : [],
    };

    setPosts([newEntry, ...posts]);
    setNewPost({ title: "", content: "", tags: "" });
  };

  // Lọc bài theo tag
  const filteredPosts = selectedTag === "Tất cả"
    ? posts
    : posts.filter(post => post.tags.includes(selectedTag));

  // Tập hợp tất cả tag để lọc
  const allTags = ["Tất cả", ...new Set(posts.flatMap(p => p.tags))];

  return (
    <section className="blog-section" id="blog">
      <Container>
        <h2 className="text-center mb-4">Blog Chia Sẻ Kiến Thức & Công Nghệ</h2>

        {/* Form viết bài mới */}
        <div className="write-form mb-5">
          <h4>✍️ Viết bài mới</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tiêu đề bài viết..."
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Nhập nội dung chia sẻ..."
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Thẻ (tags, ngăn cách bằng dấu phẩy)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ví dụ: React, Frontend"
                value={newPost.tags}
                onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Đăng bài
            </Button>
          </Form>
        </div>

        {/* Bộ lọc */}
        <div className="tag-filter text-center mb-4">
          {allTags.map((tag, idx) => (
            <Button
              key={idx}
              variant={selectedTag === tag ? "primary" : "outline-light"}
              onClick={() => setSelectedTag(tag)}
              className="m-1"
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Hiển thị bài viết */}
        <Row>
          {filteredPosts.map((post, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="blog-card">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                  <Card.Text>{post.content}</Card.Text>
                  <div>
                    {post.tags.map((tag, i) => (
                      <Badge bg="secondary" className="me-1" key={i}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
