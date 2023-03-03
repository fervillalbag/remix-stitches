import { useContext, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { globalCss } from "@stitches/react";
import { reset } from "stitches-reset"

import ClientStyleContext from "~/styles/client.context";
import { styled } from "~/styles/stitches.config";

const Container = styled("div", {
  backgroundColor: "#ff0000",
  padding: "1em"
})

const globalStyles = globalCss({
  ...reset,
  body: { fontFamily: "Raleway" },
});
globalStyles();

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

interface IDocument {
  children: React.ReactNode;
  title?: string;
}

function Document({ children, title }: IDocument) {
  const clientStyleData = useContext(ClientStyleContext);

  useEffect(() => {
    clientStyleData.reset();
  }, [clientStyleData]);
  
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {title && <title>{title}</title>}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: clientStyleData.sheet }}
          suppressHydrationWarning
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }: {error: Error}) {
  return (
    <Document title="Error!">
      <Container>
        <p>[ErrorBoundary]: There was an error: {error.message}</p>
      </Container>
    </Document>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Raleway&display=swap",
    },
  ];
}