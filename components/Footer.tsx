import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={`fixed-bottom mt-5  text-center ${styles.footer}`}>
      <Container
        style={{
          backgroundColor: "transparent",
          backdropFilter: "blur(3px)",
        }}
        className={styles["footer-content"]}
      >
        <p>&copy;{new Date().getFullYear()} Saygin Saracoglu </p>
      </Container>
    </footer>
  );
}
export default Footer;
