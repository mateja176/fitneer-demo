import register from "./components/complex/register.js";
import main from "./components/complex/main.js";
import profiling from "./components/complex/profiling.js";

const app = document.querySelector( "#app" );
app.innerHTML = register.content;

// const app = document.querySelector( "#app" );
// app.innerHTML = main.content;

// const app = document.querySelector( "#app" );
// app.innerHTML = profiling.content;

const Store = {
  activate: ( id, event = "click" ) => {
    document.querySelector(`#${id}`).addEventListener(event, () => {
      Store.dispatch( id );
    });
  },
  activateClass: ( className, event = "click" ) => {
    document.querySelectorAll( `.${ className }` ).forEach( element => {
      element.addEventListener(event, () => {
        Store.dispatch(className);
      });
    } );
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
        app.innerHTML = profiling.content;
        Store.activateClass( "selectGoal" );
        document.querySelector( "#page1" ).style.backgroundColor = "grey";
        break;
      case "selectGoal":
        console.dir( "goal selected" );
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
