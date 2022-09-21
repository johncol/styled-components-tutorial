import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { LandingContent } from "./components/LandingContent";
import { Container } from "./components/styled/Container.styled";
import { GlobalStyles } from "./components/styled/Global.styled";

const theme = {
  colors: {
    accent: '#e9119d',
    header: '#ebfbff',
    body: {
      background: '#ebfbff',
      text: '#333'
    },
    footer: '#033'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <LandingContent />
      </Container>
    </ThemeProvider>
  ); 
}

export default App;
