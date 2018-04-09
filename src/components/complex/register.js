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

const fitneerText = new Text({
  id: "fitneerText",
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

const logoLayout = new Layout({
  id: "logoLayout",
  tag: "header",
  margin: "5em 0 0 0",
  gridTemplateRows: "1fr auto auto",
  innerHtml: `
    ${fitneerLogo.content}
    ${fitneerText.content}
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

const signupFacebook = new Text({
  id: "signupFacebook",
  margin: "0.5em 0 0 0",
  fontSize: "120%",
  color: "white",
  innerHtml: "Sign up with Facebook",
  gridArea: "signupFacebook"
});

const noShare = new Text({
  id: "noShare",
  color: "lightgrey",
  margin: "0 0.5em 0.5em 0.5em",
  innerHtml: "Nothing is shared without your permission",
  gridArea: "noShare"
});


const signupFacebookLayout = new Layout({
  id: "signupFacebookLayout",
  tag: "main",
  margin: "0 0 1em 0",
  background: "#3E5B98",
  borderRadius: "3%",
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: "auto auto",
  gridTemplateAreas: `
  "facebookLogo signupFacebook"
  "facebookLogo noShare"`,
  innerHtml: `
    ${facebookLogo.content}
    ${signupFacebook.content}
    ${noShare.content}
  `
});

const policy = new Text({
  id: "policy",
  color: "grey",
  innerHtml: `
    By creating an account I agree to the Fitneer<br><a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
  `
});


const signupLayout = new Layout({
  id: "signupLayout",
  textAlign: "center",
  innerHtml: `
    ${signupFacebookLayout.content}
    ${policy.content}
  `
});


const signInLink = new Anchor( {
  display: "inline-block",
  color: "#3F81FC",
  innerHtml: "Sign in"
});

const signIn = new Text({
  id: "signIn",
  margin: "0 0 2em 0",
  innerHtml: `Already have an account? ${signInLink.content}`
});


const registerLayout = new Layout({
  id: "registerLayout",
  tag: "section",
  width: "100vw",
  height: "100vh",
  background: "white",
  gridTemplateRows: "auto 1fr auto",
  innerHtml: `
    ${logoLayout.content}
    ${signupLayout.content}
    ${signIn.content}
  `
} );

export default registerLayout;
