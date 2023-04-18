"use client";
import { Card, Col, Row, Button, Text, Link } from "@nextui-org/react";

interface CardFrontProps {
  title: string;
  imageSrc: string[];
  onButtonClick: () => void;
}

export const CardFront: React.FC<CardFrontProps> = ({
  title,
  imageSrc,
  onButtonClick,
}) => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header
      css={{ position: "absolute", zIndex: 1, top: 5 }}
    ></Card.Header>

    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={imageSrc[0]}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>

    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col>
              <Text color="#d1d1d1" size={16}>
                {title}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              css={{ color: "#94f9f0", bg: "#000000" }}
              onClick={onButtonClick}
            >
              <Text
                css={{ color: "white" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Learn More
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
