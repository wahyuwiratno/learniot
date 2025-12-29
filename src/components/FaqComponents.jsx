import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index.js";

const FaqComponent = () => {
  return (
    <section className="faq py-5">
      <Container>
        <Row>
          <Col data-aos="fade-up">
            <h1 className="text-center fw-bold">Pertanyaan yang Sering Diajukan</h1>
            <p className="text-center">Segala hal yang perlu Anda ketahui tentang LearnIOT.</p>
          </Col>
        </Row>
        <Row className="mt-5 g-4">
          {faq.map((data) => (
            <Col key={data.id} lg={6} data-aos="fade-up" data-aos-delay={data.id * 100}>
              <Accordion className="shadow-sm">
                <Accordion.Item eventKey={data.eventKey.toString()}>
                  <Accordion.Header className="fw-bold">{data.title}</Accordion.Header>
                  <Accordion.Body className="text-muted">
                    {data.desc}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FaqComponent;