import "./styles.scss";
import { ThemeProvider } from "next-themes";

console.log("appjs");

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
