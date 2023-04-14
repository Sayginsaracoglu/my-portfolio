import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function TechSlider() {
  const technologies = [
    {
      name: "HTML",
      imgSrc: "/icons/html.png",
    },
    {
      name: "CSS",
      imgSrc: "/icons/css.png",
    },
    {
      name: "Bootstrap",
      imgSrc: "/icons/bootstrap.png",
    },
    {
      name: "JavaScript",
      imgSrc: "/icons/javascript.png",
    },
    {
      name: "Typescript",
      imgSrc: "/icons/typescript.png",
    },
    {
      name: "React",
      imgSrc: "/icons/react.png",
    },
    {
      name: "ReactNative",
      imgSrc: "/icons/reactN.png",
    },
    {
      name: "Python",
      imgSrc: "/icons/python.png",
    },
    {
      name: "C++",
      imgSrc: "/icons/cplus.png",
    },
    {
      name: "Node.js",
      imgSrc: "/icons/node.png",
    },
    {
      name: "Sql",
      imgSrc: "/icons/sql1.png",
    },
    {
      name: "MongoDB",
      imgSrc: "/icons/mongo4.png",
    },
    {
      name: "MySql",
      imgSrc: "/icons/mysql1.png",
    },
  ];

  return (
    <Container className={`fixed-bottom mt-5`} style={{ marginBottom: "55px" }}>
      <div className={styles.carouselItem}>
        {technologies.map((tech) => (
          <div key={tech.name} className={styles.techImage}>
            <span title={tech.name}>
              <Image
                src={tech.imgSrc}
                alt={tech.name}
                width={32}
                height={32}
                className={`${styles.image} ${styles.icon}`}
              />
            </span>
          </div>
        ))}
      </div>
    </Container>
  );
}
