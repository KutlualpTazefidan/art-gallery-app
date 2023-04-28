/*
author of the styled component: Kutlualp Tazefidan
For styling I decided to use Link component with Material UI Button, which provides certain benefits for SEO purposes
https://dev.to/ivandotv/using-next-js-link-component-with-material-ui-buttons-and-menu-items-3m6a
*/

import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNavigationBar = styled.nav`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: var(--primary-color);
  box-shadow: 0 0px 28px rgba(0, 0, 0, 0.25), 0 0px 10px rgba(0, 0, 0, 0.22);

  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    gap: 3rem;
    padding: 0;
    margin: 0;
  }
  button {
    background: transparent;
    border: solid 1px transparent;
    border-radius: 1rem;
    color: var(--text-color);
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: 0.2s;
    box-shadow: 0 0px 28px rgba(0, 0, 0, 0.25), 0 0px 10px rgba(0, 0, 0, 0.22);
    background-color: rgba(255, 255, 255, 0.1);
    &:hover {
      border-color: var(--white);
      box-shadow: 0 0px 6px rgba(255, 255, 255, 0.5),
        0 0px 2px rgba(255, 255, 255, 0.5);
      color: var(--text-color);
    }
    &:active {
      background-color: var(--third-color);
      border-color: var(--third-color);
      color: var(--third-color);
      box-shadow: none;
    }
  }
`;

export default function Navigation() {
  return (
    <StyledNavigationBar>
      <ul>
        <li>
          <Link href="/" passHref>
            <button>Spotlight</button>
          </Link>
        </li>
        <li>
          <Link href="/art-pieces">
            <button>Pieces</button>
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <button>Favorites</button>
          </Link>
        </li>
      </ul>
    </StyledNavigationBar>
  );
}
