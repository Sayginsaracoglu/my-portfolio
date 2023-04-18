"use client";
import ProjectCard from "@/components/ProjectCard";
import { Row, Col } from "react-bootstrap";
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
        Hello
        {/* {projects.map(
          (project) =>
            project.active && (
              <Col lg={6} key={project.id}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  sourceUrl={project.sourceUrl}
                  url={project.url ? project.url : undefined}
                  usedTech={project.usedTech ? project.usedTech : undefined}
                />
              </Col>
            )
        )} */}
      </Row>
    </>
  );
}
