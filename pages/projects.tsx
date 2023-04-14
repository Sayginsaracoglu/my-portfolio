import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "react-bootstrap";
import ProjectCard from "@/components/ProjectCard";
import { Row, Col } from "react-bootstrap";
import projects from "@/data/projectsData";

export default function Projects() {
  return (
    <>
      <Row
        className="gy-4"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(3px)",
        }}
      >
        {projects.map((project) => (
          <Col lg={6} key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              url={project.url ? project.url : undefined}
            />
            <br />
            <br />
            <br />
            <br />
          </Col>
        ))}
      </Row>
    </>
  );
}
