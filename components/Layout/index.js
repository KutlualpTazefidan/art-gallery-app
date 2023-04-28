import Navigation from "../Navigation";
import styled from "styled-components";

const StyledLayout = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Layout({ children }) {
  return (
    <div>
      <StyledLayout>
        <Navigation />
      </StyledLayout>
      <main>{children}</main>
    </div>
  );
}
