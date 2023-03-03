import { styled } from "@stitches/react";

const Container = styled("div", {
  display: "flex",
  justifyContent: "center"
})

const Button = styled("button", {
  backgroundColor: "rebeccapurple",
  padding: "0.5rem 1.5rem",
  border: 0,
  fontSize: 20,
  borderRadius: 3,
  color: "white"
})

export default function Index() {
  return (
    <Container>
      <Button>Hello world from remix with stitches</Button>
    </Container>
  );
}
