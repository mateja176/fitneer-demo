import register from "./components/complex/register.js";
import main from "./components/complex/main.js";
import profiling from "./components/complex/profiling.js";

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
      case "find": {
        app.innerHTML = profiling.content;
        Deactivator.selectGoal = Activator.activateClass( "selectGoal" );
        document.querySelector( "#page1" ).style.backgroundColor = "grey";
        break;
      }
      case "selectGoal": {
        // console.dir(deactivator.selectGoal);
        Deactivator.selectGoal();
        console.dir( "selectGoal" );

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
        document.querySelectorAll( ".options" ).forEach( option => {
          option.classList = "options selectFitnessLevel";
        } );

        // document.querySelector( "#option0" ).innerHTML = "I'm not so fit";
        document.querySelectorAll( ".options" ).forEach( ( option, i ) => {
          option.innerHTML = `${fitnessLevelArray[i]}`;
        });

        document.querySelector("#page1").style.backgroundColor = "white";
        document.querySelector( "#page2" ).style.backgroundColor = "grey";

        Deactivator.fitnessLevel = Activator.activateClass( "selectFitnessLevel" );

        break;
      }
      case "selectFitnessLevel": {
        Deactivator.fitnessLevel();
        console.dir("selectFitnessLevel");

        document.querySelector( "#subjectHeading" ).innerHTML = "How do you like to rain";
        document.querySelector( "#subjectExplained" ).innerHTML = "Every method has it's benefits";

        const howArray = [
          "Outside",
          "In the gym"
        ];
        const diff = howArray.length - document.querySelectorAll( ".options" ).length;
        const difference = Math.abs(diff);

        if ( howArray.length > document.querySelectorAll( ".options" ).length ) {
          for (let index = 0; index < difference; index++) {
            const additionalParagraph = document.createElement( "p" );
            additionalParagraph.classList = "options";
            document.querySelector( "#options" ).appendChild( additionalParagraph );
          }
        } else if ( howArray.length < document.querySelectorAll( ".options" ).length ) {
          for ( let index = 1; index <= difference; index++ ) {
            const options = document.querySelectorAll( ".options" );
            const redundantParagraph = document.querySelector( `#option${options.length - index}` );
            document.querySelector( "#options" ).removeChild(redundantParagraph);
          }

        }
        document.querySelectorAll( ".options" ).forEach( option => {
          option.classList = "options selectHow";
        } );

        document.querySelectorAll( ".options" ).forEach( ( option, i ) => {
          option.innerHTML = `${howArray[i]}`;
        });

        document.querySelector("#page2").style.backgroundColor = "white";
        document.querySelector( "#page3" ).style.backgroundColor = "grey";

        Deactivator.selectHow = Activator.activateClass("selectHow");

        break;
      }
      case "selectHow": {
        Deactivator.selectHow();
        console.dir( "selectHow" );
        const updateProfiling = ( className, heading, explanation, optionsArray  ) => {

        };

        break;
      }
      default:
        break;
    }
  }
};

Activator.activate( "facebook" );

/**
 * TODO
 *
 * Pull out functions into separate file and maybe actions
 *
 * Lower angle blue: Pull out colors and angle into a separate file
 *
 * Back button profiling
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
 * Minify, unglify, tree shake
 */
