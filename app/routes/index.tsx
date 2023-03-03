import { styled } from "@stitches/react";
import DialogUI, { links as dialogLinks } from "~/ui/Dialog";

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
  color: "white",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "darkcyan"
  }
})

export default function Index() {
  return (
    <Container>
      <Button>Hello world from remix with stitches</Button>

      <DialogUI />
    </Container>
  );
}

export function links() {
  return [...dialogLinks()];
}
