import cn from "classnames";
import { SVGMap } from "react-svg-map";
import s from "./Map.module.css";
import Content from "./content.json";

const mapLocationToClassname = (location) => {
  let colors;
  switch (location.id) {
    case "alsace":
      colors = "text-red-500 hover:text-red-400";
      break;
    case "beaujolais":
      colors = "text-purple-700 hover:text-purple-600";
      break;
    case "bordeaux":
      colors = "text-pink-700 hover:text-pink-600";
      break;
    case "bourgogne":
      colors = "text-blue-400 hover:text-blue-300";
      break;
    case "champagne":
      colors = "text-blue-600 hover:text-blue-500";
      break;
    case "corse":
      colors = "text-yellow-600 hover:text-yellow-500";
      break;
    case "jura":
      colors = "text-indigo-500 hover:text-indigo-400";
      break;
    case "languedoc":
      colors = "text-red-800 hover:text-red-700";
      break;
    case "loire":
      colors = "text-green-400 hover:text-green-300";
      break;
    case "provence":
      colors = "text-green-700 hover:text-green-600";
      break;
    case "rhone":
      colors = "text-yellow-800 hover:text-yellow-700";
      break;
    case "savoie":
      colors = "text-yellow-400 hover:text-yellow-300";
      break;
    case "sud-ouest":
      colors = "text-pink-400 hover:text-pink-300"
      break;
    default:
      return "svg-map__location"
  }
  return `cursor-pointer fill-current ${colors} ${s.selected}`;
};

const Map = ({ className, onLocationClick }) => {
  return (
    <div className={cn(s.root, className)}>
      <img src="/background.svg" />
      <SVGMap
        className={s.dynamic}
        map={Content}
        locationClassName={mapLocationToClassname}
        onLocationClick={(e) =>
          onLocationClick(e.target.id)
        }
      />
    </div>
  );
};

export default Map;
