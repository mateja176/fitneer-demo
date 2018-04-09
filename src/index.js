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
      case "selectGoal": {
        document.querySelector( "#subjectHeading" ).innerHTML = "Your fintess level";
        document.querySelector( "#subjectExplained" ).innerHTML = "It's not important where you begin<br>But where you are heading";

        const fitnessLevelArray = [
          "I'm not so fit",
          "I am quite fit",
          "I am very fit"
        ];
        const diff = fitnessLevelArray.length - document.querySelectorAll( ".options" ).length;
        const difference = Math.abs(diff);

        if ( fitnessLevelArray.length > document.querySelectorAll( ".options" ).length ) {
          for (let index = 0; index < difference; index++) {
            const additionalParagraph = document.createElement( "p" );
            additionalParagraph.classList = "options";
            document.querySelector( "#options" ).appendChild( additionalParagraph );
          }
        } else if ( fitnessLevelArray.length < document.querySelectorAll( ".options" ).length ) {
          for ( let index = 1; index <= difference; index++ ) {
            const options = document.querySelectorAll( ".options" );
            const redundantParagraph = document.querySelector( `#option${options.length - index}` );
            document.querySelector( "#options" ).removeChild(redundantParagraph);
          }

        }
        // document.querySelector( "#option0" ).innerHTML = "I'm not so fit";
        document.querySelectorAll( ".options" ).forEach( ( option, i ) => {
          option.innerHTML = `${fitnessLevelArray[i]}`;
        });

        document.querySelector("#page1").style.backgroundColor = "white";
        document.querySelector("#page2").style.backgroundColor = "grey";
        break;
      }
      default:
        break;
    }
  }
};

Store.activate( "facebook" );

/**
 * TODO
 *
 * Lower angle blue
 *
 * Back button profiling
 *
 * Fixed hight paragraph
 *
 * root
 * button layout text
 * heading paragraph anchor label
 *
 * Lazy Load main.js
 *
 * Create dynamic componenets
 *
 * Create SVG logo
 *
 * Optimize SVG's
 *
 * Minify and unglify code
 */
