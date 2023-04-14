import { useState, useEffect } from "react";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Typewriter from "typewriter-effect";
import TechSlider from "@/components/TechSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{ minHeight: "55vh", marginBottom: "159px" }}
      >
        <Container fluid className={styles.container}>
          <p className={`${styles.title} ${inter.className}`}>
            Hi, I'm <b>Saygin</b>
          </p>

          <p className={styles.description}>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "a developer dedicated to create software that solves real-world problems."
                  )
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(5500)
                  .deleteChars(61)
                  .typeString(
                    "who is passionate about creating elegant and powerful software solutions."
                  )
                  .pauseFor(5500)
                  .deleteAll()
                  .typeString(
                    "a tech enthusiast who loves to design and code applications that make people's lives easier."
                  )
                  .pauseFor(5500)
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </p>
        </Container>
      </div>
      <div>
        <TechSlider></TechSlider>
      </div>
    </>
  );
}
