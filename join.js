const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

const joinList = (element) => {
  element = element.toString();
  let desiredElem = "";
  for (let i = 0; i < element.length; i++) {
    if (element[i] === ",") {
      desiredElem = desiredElem + element[i] + " " + element[i + 1];
      i++;
    } else {
      desiredElem = desiredElem + element[i];
    }
  }
  return desiredElem;
};

const concepts = joinList(conceptList); //gists, types, operators, iteration, problem solving
console.log(`Today I learned about ${concepts}.`);