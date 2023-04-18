"use client";
import { Card, Col, Row, Button, Text, Grid, Link } from "@nextui-org/react";
import technologies from "@/data/technologiesData";
import TechSlider from "./TechSlider";

interface Technology {
  name: string;
  imgSrc: string;
}

interface CardBackProps {
  title: string;
  description: string;
  url?: string;
  sourceUrl?: string;
  usedTech?: Technology[];
  onButtonClick: () => void;
}

export const CardBack: React.FC<CardBackProps> = ({
  title,
  description,
  url,
  sourceUrl,
  usedTech,
  onButtonClick,
}) => (
  <Card css={{ w: "100%", h: "400px", bg: "black" }}>
    <Card.Body css={{ p: 0 }}>
      <Card css={{ p: "$6", mw: "100%", bg: "black", height: "100%" }}>
        <Card.Header>
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ color: "white", lineHeight: "$xs" }}>
                {title}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text>
                <Link
                  css={{ color: "$accents8" }}
                  color="primary"
                  target="_blank"
                  href={url}
                >
                  {url}
                </Link>
              </Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ color: "white", py: "$2" }}>
          <Text css={{ color: "white" }}>{description}</Text>
          <Grid.Container css={{ pl: "$0" }}>
            <Grid xs={12}>
              {sourceUrl && (
                <Link color="primary" target="_blank" href={sourceUrl}>
                  Source code on Github
                </Link>
              )}
            </Grid>
            <Grid>
              {url && (
                <Link color="primary" target="_blank" href={url}>
                  View Page
                </Link>
              )}
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
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
        {" "}
        {usedTech && (
          <TechSlider technologies={usedTech} iconSize={24} insideCard={true} />
        )}
        <Col></Col>
        <Row justify="flex-end">
          <Button
            flat
            auto
            css={{ color: "#94f9f0", bg: "#000000", border: "white 1px solid" }}
            onClick={onButtonClick}
          >
            <Text
              css={{ color: "white" }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              Back
            </Text>
          </Button>
        </Row>
      </Row>
    </Card.Footer>
  </Card>
);
