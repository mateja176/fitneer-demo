import Layout from "../static/Layout.js";
import Text from "../static/Text.js";
import Img from "../static/Img.js";
import Anchor from "../static/Anchor.js";

const fitneerLogo = new Img({
  id: "fitneerLogo",
  src: "img/fitneer-shadow.png",
  width: "7em",
  height: "7em"
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
  margin: "5em 0 0 0",
  gridTemplateRows: "1fr auto auto",
  innerHtml: `
    ${fitneerLogo.content}
    ${fitneerHeading.content}
    ${fitneerSlogan.content}
  `
});


const facebookLogo = new Img({
  id: "facebookLogo",
  src: "img/facebook-logo.png",
  borderRadius: "5%",
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
  innerHtml: "Sign up with Facebook",
  gridArea: "facebookSignup"
});

const facebookNoShare = new Text({
  id: "facebookNoShare",
  color: "lightgrey",
  margin: "0 0.5em 0.5em 0.5em",
  innerHtml: "Nothing is shared without your permission",
  gridArea: "facebookNoShare"
});


const facebook = new Layout({
  id: "facebook",
  tag: "main",
  margin: "0 0 1em 0",
  background: "#3E5B98",
  borderRadius: "3%",
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

const policy = new Text({
  id: "policy",
  color: "grey",
  innerHtml: `
    By creating an account I agree to the Fitneer<br><a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
  `
});


const signup = new Layout({
  id: "signup",
  textAlign: "center",
  innerHtml: `
    ${facebook.content}
    ${policy.content}
  `
});


const signinLink = new Anchor( {
  id: "signinLink",
  display: "inline-block",
  color: "#3F81FC",
  innerHtml: "Sign in"
});

const signin = new Text({
  id: "signin",
  margin: "0 0 2em 0",
  innerHtml: `Already have an account? ${signinLink.content}`
});


const register = new Layout({
  id: "register",
  tag: "section",
  width: "100vw",
  height: "100vh",
  background: "white",
  gridTemplateRows: "auto 1fr auto",
  innerHtml: `
    ${fitneer.content}
    ${signup.content}
    ${signin.content}
  `
} );

export default register;
