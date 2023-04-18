import React from "react";
import { Modal, Text } from "@nextui-org/react";
import { Button, Form, Nav } from "react-bootstrap";
import emailjs from "emailjs-com";

export default function Contact() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  function sendEmail(e: any) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    console.log("hello");
    emailjs
      .sendForm(
        "service_6rikggo",
        "template_mr49jrg",
        e.target,
        "7PRIhs18d_c_a2klv"
      )
      .then(
        (result: any) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <Nav.Link onClick={handler}>Contact</Nav.Link>

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{ bg: "#16181a" }}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} css={{ color: "white" }}>
            Contact
            <Text css={{ color: "white" }} b size={18}>
              Me
            </Text>
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "white" }}>Name</Form.Label>
              <Form.Control
                type="text"
                style={{ color: "white", backgroundColor: "black" }}
                name="from_name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Message</Form.Label>
              <Form.Control
                type="text"
                style={{ color: "white", backgroundColor: "black" }}
                name="message"
                required
              />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
              <Button
                variant="outline-danger"
                onClick={closeHandler}
                style={{ marginRight: "10px" }}
              >
                Close
              </Button>
              <Button type="submit" variant="outline-success">
                Send
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
