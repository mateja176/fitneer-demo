import Layout from "../components/Layout.js";
import Image from "../components/Image.js";
import Paragraph from "../components/Paragraph.js";

const registerLayout = new Layout( {
  id: "registerLayout",
  tag: "main",
  width: "100vw",
  height: "100vh",
  background: "white",
  gridTemplateRows: "auto 1fr auto"
} );

document.querySelector( "#app" ).innerHTML = registerLayout.component;

const logoLayout = new Layout( {
  id: "logoLayout",
  gridTemplateRows: "1fr auto auto"
} );

registerLayout.updateContent(logoLayout.component);

const logo = new Image( {
  id: "logo",
  src: "./img/fitneer shadow.png",
  width: "3em",
  height: "3em"
});

const fitneer = new Paragraph( {
  id: "fitneer",
  content: "Fitneer"
} );

const description = new Paragraph( {
  id: "description",
  content: "Find your fintess peer"
} );

logoLayout.updateContent(
  logo.component +
  fitneer.component +
  description.component
);
