import { StyledButton } from "./styled/Button.styled";

export const Button = ({ children, primary, ...props }) => {
  return (
    <StyledButton primary={primary}>
      <button {...props}>{children}</button>
    </StyledButton>
  )
};
