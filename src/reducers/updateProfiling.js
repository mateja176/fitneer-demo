const updateProfiling = ( className, heading, explanation, optionsArray, currentPageNumber ) => {

  document.querySelector("#subjectHeading").innerHTML = heading;
  document.querySelector("#subjectExplained").innerHTML = explanation;

  const difference = optionsArray.length - document.querySelectorAll(".options").length;
  const absoluteDifference = Math.abs(difference);

  if (optionsArray.length > document.querySelectorAll(".options").length) {
    for (let index = 0; index < absoluteDifference; index++) {
      const additionalParagraph = document.createElement("p");
      additionalParagraph.classList = `options`;
      additionalParagraph.id = `option${document.querySelectorAll(".options").length}`;
      document.querySelector("#options").appendChild(additionalParagraph);
    }
  } else if (optionsArray.length < document.querySelectorAll(".options").length) {
    for (let index = 0; index < absoluteDifference; index++) {
      const options = document.querySelectorAll( ".options" );
      // console.dir(options.length);
      const redundantParagraph = document.querySelector(
        `#option${options.length - 1}`
      );
      document.querySelector("#options").removeChild(redundantParagraph);
    }
  }
  document.querySelectorAll(".options").forEach(option => {
    option.classList = `options ${className}`;
  });

  document.querySelectorAll(".options").forEach((option, i) => {
    option.innerHTML = `${optionsArray[i]}`;
  });

  document.querySelector(`#page${currentPageNumber}`).style.backgroundColor = "white";
  document.querySelector(`#page${currentPageNumber}`).innerHTML = "&#9989;";
  document.querySelector(`#page${currentPageNumber + 1}`).style.backgroundColor = "grey";

};

export default updateProfiling;
