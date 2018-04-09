import Layout from "../static/Layout.js";
import Img from "../static/Img.js";
import Label from "../static/Label.js";

const findIcon = new Img({
  id: "findIcon",
  src: "img/search.svg",
  width: "7em",
  height: "7em"
} );

const findIconWrap = new Layout({
  id: "findIconWrap",
  width: "10em",
  height: "10em",
  overflow: "hidden",
  borderRadius: "50%",
  innerHtml: `
    ${findIcon.content}
  `
} );

const findTextLabel = new Label({
  id: "findTextLabel",
  element: "findIcon",
  fontSize: "200%",
  margin: "1em 0 0 0",
  background: "transparent",
  color: "white",
  innerHtml: "Find Peers"
} );

const find = new Layout({
  id: "find",
  tag: "section",
  background: "transparent",
  margin: "0 0 10em 0",
  innerHtml: `
    ${findIconWrap.content}
    ${findTextLabel.content}
  `
});

const main = new Layout({
  id: "main",
  tag: "main",
  width: "100vw",
  height: "100vh",
  background: `linear-gradient( 160deg,
    white 0%,
    white 35%,
    #21A1F0 35%,
    #21A1F0 100%
  )`,
  innerHtml: `
    ${find.content}
  `
});

export default main;
