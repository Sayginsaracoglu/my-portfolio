import { Container } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "transparent",
        backdropFilter: "blur(3px)",
      }}
      className={`absolute-bottom mt-5  text-center ${styles.footer}`}
    >
      <Container className={styles["footer-content"]}>
        <p>&copy;{new Date().getFullYear()} Saygin Saracoglu </p>
      </Container>
    </footer>
  );
}
export default Footer;
