import styled from "styled-components";

export const StyledLandingContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > * {
    margin: 1.5rem 0;
  }

  h2 {
    font-size: 2.7rem;
    font-weight: 500;
  }

  p {
    color: #666;
    line-height: 1.5;
    margin: 1.5rem 1rem 0;
  }

  svg {
    margin-top: -2rem;
  }
`;
