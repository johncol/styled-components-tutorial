import { Logo } from "./Logo";
import { Button } from "./Button";
import { Container } from "./styled/Container.styled";
import { StyledHeader } from "./styled/Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <h1>Hubble</h1>
        <Button>Try it for free</Button>
      </Container>
    </StyledHeader>
  );
};
