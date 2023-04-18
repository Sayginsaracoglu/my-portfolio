import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

interface Technology {
  name: string;
  imgSrc: string;
}

interface TechSliderProps {
  technologies: Technology[];
  iconSize: number;
  insideCard: boolean;
}

export default function TechSlider({
  technologies,
  iconSize,
  insideCard,
}: TechSliderProps) {
  return (
    <Container>
      <div className={styles.carouselItem}>
        {technologies.map((tech) => (
          <div key={tech.name} className={styles.techImage}>
            <span title={tech.name}>
              <Image
                src={tech.imgSrc}
                alt={tech.name}
                width={iconSize}
                height={iconSize}
                className={`${styles.image} ${insideCard ? "" : styles.icon} `}
              />
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
