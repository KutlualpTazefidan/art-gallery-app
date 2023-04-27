import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </div>
  );
}
