import register from "./components/complex/register.js";
import main from "./components/complex/main.js";
import profiling from "./components/complex/profiling.js";
import updateProfiling from "./reducers/updateProfiling.js";

const app = document.querySelector( "#app" );
app.innerHTML = register.content;

const Deactivator = {};

const Activator = {
  activate: ( id, event = "click" ) => {
    const activateFunction = () => {
      Activator.dispatch(id);
    };
    document.querySelector( `#${ id }` ).addEventListener( event, activateFunction );
    const deactivate = () => {
      document.querySelector( `#${ id }` ).removeEventListener( event, activateFunction );
    };
    return deactivate;
  },
  activateClass: ( className, event = "click" ) => {
    const activateClassFunction = () => {
      Activator.dispatch(className);
    };
    document.querySelectorAll( `.${ className }` ).forEach( element => {
      element.addEventListener(event, activateClassFunction);
    } );
    const deactivateClass = () => {
      document.querySelectorAll( `.${ className }` ).forEach( element => {
        element.removeEventListener( event, activateClassFunction );
      } );
    };
    return deactivateClass;
  },
  dispatch: (action) => {
    switch (action) {
      case "facebook":
        app.innerHTML = main.content;
        Activator.activate("logout");
        Activator.activate("find");
        break;
      case "logout":
        app.innerHTML = register.content;
        Activator.activate("facebook");
        break;
      case "find":
        app.innerHTML = profiling.content;
        Deactivator.selectGoal = Activator.activateClass( "selectGoal" );
        break;

      case "selectGoal":

        Deactivator.selectGoal();

        updateProfiling(
          "selectFitnessLevel",
          "Your fintess level",
          "It's not important where you begin<br>But where you are heading",
          [ "I'm not so fit", "I am quite fit", "I am very fit" ],
          1
        );

        Deactivator.selectFitnessLevel = Activator.activateClass("selectFitnessLevel");

        break;

      case "selectFitnessLevel":

        Deactivator.selectFitnessLevel();

        updateProfiling(
          "selectHow",
          "How do you like to rain",
          "Every method has it's benefits",
          [ "Outside", "In the gym" ],
          2
        );

        Deactivator.selectHow = Activator.activateClass("selectHow");

        break;

      case "selectHow":

        Deactivator.selectHow();

        updateProfiling(
          "selectWhen",
          "When do you like to train",
          "Which time suits you best?",
          [ "Morning", "Afternoon", "Evening" ],
          3
        );

        Deactivator.selectWhen = Activator.activateClass("selectWhen");

        break;

      case "selectWhen":

        Deactivator.selectWhen();

        updateProfiling(
          "selectLocation",
          "Location",
          "Last step! To get a list of peers, turn on location.",
          [ "Turn on location" ],
          4
        );

        Deactivator.selectLocation = Activator.activateClass("selectLocation");

        break;

      default:
        break;
    }
  }
};

Activator.activate( "facebook" );

/**
 * TODO
 *
 * Lazy load reducers and componenets for pages
 *
 * Pull out actions into separate file
 *
 * Lower angle blue: Pull out colors and angle into a separate file
 *
 * Back button profiling
 *
 * Call the Activator (Root)Reducer Store values as arrays and
 * create functions which have back and forward
 * You can even store values in an object if you want to be able to call a state by key
 *
 * root
 * button layout text
 * heading paragraph anchor label
 *
 * Create dynamic componenets
 *
 * Create SVG logo
 *
 * Optimize SVG's
 *
 * Minify, unglify, tree shake
 */
