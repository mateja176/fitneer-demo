import Layout from "../static/Layout.js";
import Text from "../static/Text.js";
import Img from "../static/Img.js";
import Anchor from "../static/Anchor.js";

const fitneerLogo = new Img({
  id: "fitneerLogo",
  src: "img/fitneer-shadow.png",
  background: "transparent",
  width: "10em",
  height: "10em"
});

const fitneerHeading = new Text({
  id: "fitneerHeading",
  tag: "h1",
  margin: "1em 0 0.5em 0",
  fontSize: "200%",
  color: "#3F81FC",
  innerHtml: "Fitneer"
});

const fitneerSlogan = new Text({
  id: "fitneerSlogan",
  color: "grey",
  innerHtml: "Find your fintess peer"
});

const fitneer = new Layout({
  id: "fitneer",
  tag: "header",
  margin: "8em 0 0 0",
  background: "transparent",
  gridTemplateRows: "1fr auto auto",
  innerHtml: `
    ${fitneerLogo.content}
    ${fitneerHeading.content}
    ${fitneerSlogan.content}
  `
});


const facebookLogo = new Img({
  id: "facebookLogo",
  src: "img/facebook.svg",
  borderRight: "0.1em solid lightgrey",
  background: "#3E5B98",
  width: "3em",
  height: "3em",
  gridArea: "facebookLogo"
});

const facebookSignup = new Text({
  id: "facebookSignup",
  margin: "0.5em 0 0 0",
  fontSize: "120%",
  color: "white",
  innerHtml: "Login with Facebook",
  gridArea: "facebookSignup"
});

const facebookNoShare = new Text({
  id: "facebookNoShare",
  color: "lightgrey",
  fontSize: "80%",
  margin: "0 0.5em 0.5em 0.5em",
  innerHtml: "Nothing is shared without your permission",
  gridArea: "facebookNoShare"
});


const facebook = new Layout({
  id: "facebook",
  tag: "main",
  margin: "0 0 1em 0",
  background: "#3E5B98",
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: "auto auto",
  gridTemplateAreas: `
  "facebookLogo facebookSignup"
  "facebookLogo facebookNoShare"`,
  innerHtml: `
    ${facebookLogo.content}
    ${facebookSignup.content}
    ${facebookNoShare.content}
  `
});

const termsOfUse = new Anchor({
  id: "termsOfUse",
  display: "inline-block",
  color: "grey",
  textDecoration: "underline",
  innerHtml: "Terms of use"
});

const privacyPolicy = new Anchor({
  id: "privacyPolicy",
  display: "inline-block",
  color: "grey",
  textDecoration: "underline",
  innerHtml: "Privacy Policy"
});

const terms = new Text({
  id: "terms",
  color: "grey",
  innerHtml: `
    By creating an account I agree to the Fitneer<br>
    ${termsOfUse.content} and ${privacyPolicy.content}
  `
});


const signup = new Layout({
  id: "signup",
  textAlign: "center",
  innerHtml: `
    ${facebook.content}
    ${terms.content}
  `
});

const register = new Layout({
  id: "register",
  tag: "section",
  width: "100vw",
  height: "100vh",
  background: `linear-gradient( 160deg,
    #21A1F0 0%,
    #21A1F0 35%,
    white 35%,
    white 100%
  )`,
  gridTemplateRows: "auto 1fr",
  innerHtml: `
    ${fitneer.content}
    ${signup.content}
  `
});

export default register;
