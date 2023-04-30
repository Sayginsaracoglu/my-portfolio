"use client";
import ProjectCard from "@/components/ProjectCard";
import { Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import projects from "@/data/projectsData";
import { useEffect, useState } from "react";

interface Technology {
  name: string;
  imgSrc: string;
}

const emptyTech: Technology = { name: "", imgSrc: "" };

export default function Projects() {
  const [isMobile, setMobile] = useState(window.innerWidth < 600);

  const updateMedia = () => {
    setMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
        {isMobile ? (
          <Card
            style={{
              width: "auto",
              borderRadius: "10px",
              backgroundColor: "#0f111466",
            }}
          >
            {projects[0].url ? (
              <Link href={projects[0].url}>
                <Card.Img
                  style={{
                    objectFit: "cover",
                    height: "12rem",
                    boxShadow: "0px 10px 10px black",
                  }}
                  variant="top"
                  src={projects[0].imageSrc[0]}
                />
              </Link>
            ) : (
              <Card.Img
                style={{
                  objectFit: "cover",
                  height: "12rem",
                  boxShadow: "0px 10px 10px black",
                }}
                variant="top"
                src={projects[0].imageSrc[0]}
              />
            )}

            <Card.Body>
              <Card.Title style={{ color: "white" }}>
                {projects[0].title}
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                {projects[0].description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ) : (
          <ProjectCard
            title={projects[0].title}
            description={projects[0].description}
            imageSrc={projects[0].imageSrc}
            sourceUrl={projects[0].sourceUrl}
            url={projects[0].url ? projects[0].url : undefined}
            usedTech={projects[0].usedTech ? projects[0].usedTech : undefined}
          />
        )}
        {projects.slice(1).map(
          (project) =>
            project.active && (
              <Col lg={6} key={project.id}>
                {isMobile ? (
                  <Card
                    style={{
                      width: "auto",
                      borderRadius: "10px",
                      backgroundColor: "#0f111466",
                    }}
                  >
                    {project.url ? (
                      <Link href={project.url}>
                        <Card.Img
                          style={{
                            objectFit: "cover",
                            height: "12rem",
                            boxShadow: "0px 10px 10px black",
                          }}
                          variant="top"
                          src={project.imageSrc[0]}
                        />
                      </Link>
                    ) : (
                      <Card.Img
                        style={{
                          objectFit: "cover",
                          height: "12rem",
                          boxShadow: "0px 10px 10px black",
                        }}
                        variant="top"
                        src={project.imageSrc[0]}
                      />
                    )}

                    <Card.Body>
                      <Card.Title style={{ color: "white" }}>
                        {project.title}
                      </Card.Title>
                      <Card.Text style={{ color: "white" }}>
                        {project.description}
                      </Card.Text>
                      {project.url && (
                        <Button variant="primary">
                          <Link
                            color="primary"
                            target="_blank"
                            href={project.url}
                          >
                            View Page
                          </Link>
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                ) : (
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    sourceUrl={project.sourceUrl}
                    url={project.url ? project.url : undefined}
                    usedTech={project.usedTech ? project.usedTech : undefined}
                  />
                )}
              </Col>
            )
        )}
      </Row>
    </>
  );
}
