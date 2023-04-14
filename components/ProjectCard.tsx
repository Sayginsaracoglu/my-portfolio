import React, { useState, MouseEvent } from "react";
import ReactCardFlip from "react-card-flip";
import Image from "next/image";
import { Nunito } from "@next/font/google";
import { Card, Button } from "react-bootstrap";
import styles from "@/styles/ProjectCard.module.css";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  url?: string; // added new optional parameter for url
}

const nunito = Nunito({ subsets: ["latin"] });

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  imageSrc,
  url,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleGoToPage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <div className={`${styles.projectCardContainer}`}>
      <ReactCardFlip isFlipped={isFlipped}>
        <Card style={{ borderRadius: "10px", border: "none" }}>
          <Card.Img
            style={{
              height: "19rem",
              borderRadius: "10px",
              objectFit: "cover",
            }}
            variant="top"
            src="/project-img/twitter.gif"
          />
        </Card>

        <Card
          style={{ width: "100%", height: "19rem", backgroundColor: "black" }}
        >
          <Card.Body>
            <Card.Text>{description}</Card.Text>
            {url && (
              <Button variant="outline-light" onClick={handleGoToPage}>
                Go to page
              </Button>
            )}
          </Card.Body>
        </Card>
      </ReactCardFlip>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <h4
          style={{ paddingTop: "5px", color: "white" }}
          className={`${nunito.className}`}
        >
          <b>{title}</b>
        </h4>
        <div>
          <Button variant="outline-light" onClick={handleClick}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
