import Layout from "../static/Layout.js";
import Text from "../static/Text.js";
import Root from "../static/Root.js";

const subjectHeading = new Text({
  id: "subjectHeading",
  tag: "h1",
  margin: "0 0 1em 0",
  fontSize: "200%",
  background: "transparent",
  color: "white",
  innerHtml: "You Goal"
});

const subjectExplained = new Text({
  id: "subjectExplained",
  margin: " 0 0 1em 0",
  background: "transparent",
  color: "white",
  innerHtml: "Don't worry you can change it later"
});

const subject = new Layout({
  id: "subject",
  tag: "header",
  margin: "5em 0 0 0",
  background: "transparent",
  gridTemplateRows: "1fr auto auto",
  innerHtml: `
    ${subjectHeading.content}
    ${subjectExplained.content}
  `
} );

const selectGoalObject = {};
const selectGoalArray = [ "Get Lean", "Get Fit", "Build Muscle" ];
let selectGoalOptions = "";

for ( let index = 0; index < selectGoalArray.length; index++ ) {
  const option = `option${index}`;
  selectGoalObject[option] = new Text({
    id: `${option}`,
    className: "selectGoal options",
    innerHtml: `${selectGoalArray[index]}`
  });
}

for (const option in selectGoalObject) {
  if (selectGoalObject.hasOwnProperty(option)) {
    selectGoalOptions += selectGoalObject[option].content;
  }
}

const options = new Layout({
  id: "options",
  tag: "main",
  margin: "0 0 1em 0",
  background: "transparent",
  gridGap: "1em",
  innerHtml: `
    ${selectGoalOptions}
  `
});


let pagesAndLines = "";

for (let index = 1; index <= 5; index++) {

  const number = new Text( {
    innerHtml: `${index}`
  } );

  const page = new Layout( {
    className: "pages",
    id: `page${index}`,
    innerHtml: `
    ${ number.content }
    `,
    width: "2em",
    height: "2em",
    border: "0.1em solid grey",
    borderRadius: "50%"
  } );

  const line = new Root( {
    width: "0.5em",
    height: "0",
    border: "0.1em solid grey"
  } );

  pagesAndLines += page.content;

  if (index !== 5) {
    pagesAndLines += line.content;
  }

}

const pagination = new Layout( {
  id: "pagination",
  innerHtml: pagesAndLines,
  margin: " 0 0 2em 0",
  gridTemplateColumns: "repeat(10, auto)"
} );

const profiling = new Layout({
  id: "profiling",
  tag: "section",
  width: "100vw",
  height: "100vh",
  background: `linear-gradient( 160deg,
    #21A1F0 0%,
    #21A1F0 35%,
    white 35%,
    white 100%
  )`,
  gridTemplateRows: "auto 1fr auto",
  innerHtml: `
    ${subject.content}
    ${options.content}
    ${pagination.content}
  `
} );

export default profiling;
