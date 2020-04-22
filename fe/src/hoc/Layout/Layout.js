import React from "react";

const Layout = (props) => (
  <div data-testid="layout">
    <header>this is header</header>
    <React.StrictMode>{props.children}</React.StrictMode>
    <footer>This is footer</footer>
  </div>
);

export default Layout;
