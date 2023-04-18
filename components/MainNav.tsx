"use client";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Contact from "./Contact";

function MainNav() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // add click event listener to the document
    document.addEventListener("click", handleClickOutside);
    return () => {
      // cleanup: remove click event listener from the document
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleResumeDownload = () => {
    const fileUrl = "@/public/resume.pdf"; // Replace with your file path
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    const path =
      (event as any).path ||
      ((event as any).composedPath && (event as any).composedPath());
    if (navRef.current && path) {
      const isInsideDropdown = path.some(
        (element: EventTarget): boolean =>
          (element as HTMLElement).classList &&
          (element as HTMLElement).classList.contains("dropdown-menu")
      );
      if (!isInsideDropdown && !navRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    }
  };

  const handleDropdownClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleClickDropdownChild = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsExpanded(false); // set isExpanded to false when a nav link is clicked
  };

  return (
    <>
      <div ref={navRef}>
        <Navbar
          style={{
            backgroundColor: "transparent",
            backdropFilter: "blur(3px)",
          }}
          className="absolute-top navbar-dark"
          expand="lg"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src="/favicon.ico"
                height="40"
                className="d-inline-block align-top"
                alt="My logo"
              />
            </Navbar.Brand>
            <Link href="/" passHref legacyBehavior>
              <Navbar.Brand>Saygin Saracoglu</Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={toggleExpanded}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" onClick={handleNavClick}>
                <Link href="/" passHref legacyBehavior>
                  <Nav.Link active={router.pathname === "/"}>Home</Nav.Link>
                </Link>

                <Link href="/projects" passHref legacyBehavior>
                  <Nav.Link active={router.pathname === "/projects"}>
                    Projects
                  </Nav.Link>
                </Link>
              </Nav>

              <Nav>
                <Nav.Item style={{ marginRight: "10px" }}>
                  <Contact />
                </Nav.Item>
                <Nav.Item>
                  <Button
                    variant="outline-light"
                    onClick={handleResumeDownload}
                  >
                    Resume
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default MainNav;
