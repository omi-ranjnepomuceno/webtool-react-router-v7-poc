import { ThemeProvider } from "@material-tailwind/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ThemeProvider>
        <HydratedRouter />
      </ThemeProvider>
    </StrictMode>
  );
});
