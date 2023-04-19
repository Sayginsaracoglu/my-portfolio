"use client";
import React from "react";
import { Container } from "react-bootstrap";
import MainNav from "./MainNav";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <MainNav />
        <Container>{props.children}</Container>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
