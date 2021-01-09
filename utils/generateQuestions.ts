import alsace from "@assets/data/alsace.json";
import bordeaux from "@assets/data/bordeaux.json";
import bourgogne from "@assets/data/bourgogne.json";
import jura from "@assets/data/jura.json";
import loire from "@assets/data/loire.json";
import provence from "@assets/data/provence.json";
import rhone from "@assets/data/rhone.json";

const availableData = [
  ...alsace.map(({ ...rest }) => ({ ...rest, region: "alsace" })),
  ...bordeaux.map(({ ...rest }) => ({ ...rest, region: "bordeaux" })),
  ...bourgogne.map(({ ...rest }) => ({ ...rest, region: "bourgogne" })),
  ...jura.map(({ ...rest }) => ({ ...rest, region: "jura" })),
  ...loire.map(({ ...rest }) => ({ ...rest, region: "loire" })),
  ...provence.map(({ ...rest }) => ({ ...rest, region: "provence" })),
  ...rhone.map(({ ...rest }) => ({ ...rest, region: "rhone" })),
];

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(original) {
  const array = [...original];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const generateQuestions = (number) => {
  return shuffleArray(availableData).slice(0, number);
};

export default generateQuestions;
