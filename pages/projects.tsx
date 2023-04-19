"use client";
import ProjectCard from "@/components/ProjectCard";
import { Row, Col, Card, Button } from "react-bootstrap";
import projects from "@/data/projectsData";

interface Technology {
  name: string;
  imgSrc: string;
}

const emptyTech: Technology = { name: "", imgSrc: "" };

export default function Projects() {
  return (
    <>
      <br />
      <Row
        className="gy-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(3px)",
        }}
      >
        {projects.map(
          (project) =>
            project.active && (
              <Col lg={6} key={project.id}>
                {/* <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  sourceUrl={project.sourceUrl}
                  url={project.url ? project.url : undefined}
                  usedTech={project.usedTech ? project.usedTech : undefined}
                /> */}
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
        )}
      </Row>
    </>
  );
}
