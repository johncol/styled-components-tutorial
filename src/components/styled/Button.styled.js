import styled, { css } from "styled-components";

export const StyledButton = styled.div`
  button {
    border: none;
    padding: 1rem 2.5rem;
    line-height: 1;
    border-radius: 1.5rem;
    background-color: #fff;
    font-weight: 900;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    transition: box-shadow .1s ease-in, color .1s ease-in;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.accent};
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
    }

    ${({ primary, theme }) =>
      primary &&
      css`
        background-color: ${theme.colors.accent};
        color: #fff;

        &:hover,
        &:focus {
          color: #fff;
        }
      `}
  }
`;
