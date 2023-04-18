"use client";
import React, { useState, MouseEvent } from "react";
import ReactCardFlip from "react-card-flip";
import { Nunito } from "@next/font/google";
import styles from "@/styles/ProjectCard.module.css";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";

interface Technology {
  name: string;
  imgSrc: string;
}

interface Props {
  title: string;
  description: string;
  imageSrc: string[];
  url?: string;
  sourceUrl?: string;
  usedTech?: Technology[];
}

const nunito = Nunito({ subsets: ["latin"] });

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  imageSrc,
  url,
  sourceUrl,
  usedTech,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleGoToPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <div className={`${styles.projectCardContainer}`}>
      <ReactCardFlip isFlipped={isFlipped}>
        {/* <Card style={{ borderRadius: "10px", border: "none" }}>
          {imageSrc.length > 1 ? (
            <Carousel>
              {imageSrc.map((src, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={src}
                    alt={`slide ${index + 1}`}
                    style={{
                      height: "19rem",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Card.Img
              style={{
                height: "19rem",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              variant="top"
              src={imageSrc[0]}
            />
          )}
        </Card> */}
        <div>
          <CardFront
            title={title}
            imageSrc={imageSrc}
            onButtonClick={handleClick}
          />
        </div>
        {/* <Card
          style={{ width: "100%", height: "400px", backgroundColor: "black" }}
        >
          <Card.Body>
            <Card.Text>{description}</Card.Text>
            {url && (
              <Button variant="outline-light" onClick={handleGoToPage}>
                Go to page
              </Button>
            )}
          </Card.Body>
        </Card> */}

        <div>
          <CardBack
            title={title}
            description={description}
            url={url}
            sourceUrl={sourceUrl}
            usedTech={usedTech ? usedTech : undefined}
            onButtonClick={handleClick}
          />
        </div>
      </ReactCardFlip>
    </div>
  );
};
export default ProjectCard;
