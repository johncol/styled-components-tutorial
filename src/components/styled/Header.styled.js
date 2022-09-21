import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: 900;
    margin: 0 0 0 1rem;
    font-size: 2.5rem;
    flex-grow: 1;
  }
`;
