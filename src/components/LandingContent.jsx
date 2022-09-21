import { Button } from "./Button";
import { ReactComponent as LaptopImage } from "../svgs/laptop.svg";
import { StyledLandingContent } from "./LandingContent.styled";

export const LandingContent = () => {
  return (
    <StyledLandingContent>
      <h2>Build the community fans will love</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
        repellendus molestiae maxime veniam necessitatibus, quia quisquam quam
        laudantium blanditiis eaque magni minus quas, reprehenderit labore.
      </p>
      <Button primary>Get Started For Free</Button>
      <LaptopImage />
    </StyledLandingContent>
  );
};
