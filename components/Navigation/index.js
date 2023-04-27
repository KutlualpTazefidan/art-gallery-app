import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">Pieces</Link>
        </li>
      </ul>
    </nav>
  );
}
