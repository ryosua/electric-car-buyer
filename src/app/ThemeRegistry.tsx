"use client";

/**
 * ThemeRegistry is a separate client component that handles MUI theme setup.
 * This separation is necessary because:
 * 1. MUI's ThemeProvider must run on the client side due to its dynamic nature
 * 2. Next.js 14 requires explicit client/server component boundaries
 * 3. Having theme setup in a separate component allows the root layout to remain a server component
 * 4. This pattern prevents hydration mismatches and function serialization errors
 *    that occur when mixing server and client-side theme logic
 */
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";

type Props = {
  children: React.ReactNode;
};

const ThemeRegistry = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default ThemeRegistry;
