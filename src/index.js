import register from "./components/complex/register.js";
import main from "./components/complex/main.js";

const app = document.querySelector( "#app" );
app.innerHTML = register.content;

// const app = document.querySelector( "#app" );
// app.innerHTML = main.content;

const Store = {
  activate: ( id, event = "click" ) => {
    document.querySelector(`#${id}`).addEventListener(event, () => {
      Store.dispatch( id );
    });
  },
  dispatch: (action) => {
    switch (action) {
      case "facebook":
        app.innerHTML = main.content;
        Store.activate("logout");
        Store.activate("find");
        break;
      case "logout":
        app.innerHTML = register.content;
        Store.activate("facebook");
        break;
      case "find":
        console.dir("found");
        // app.innerHTML = register.content;
        break;

      default:
        break;
    }
  }
};

Store.activate( "facebook" );

/**
 * TODO
 *
 * root
 * button layout text
 * heading paragraph anchor label
 *
 * Lazy Load main.js
 */
