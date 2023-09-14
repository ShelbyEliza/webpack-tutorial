import _ from "lodash";
import "./style.css";
import SunFlowers from "./sunflowers.svg";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`
console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`
console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

/** Lodash: */
function componentLodash() {
	const element = document.createElement("div");
	// Lodash, now imported by this script
	element.innerHTML = _.join(["Hello", "webpack"], " ");
	element.classList.add("hello");

	const myImage = new Image();
	myImage.src = SunFlowers;
	myImage.classList.add("flowers");

	element.appendChild(myImage);

	const xmlText = document.createElement("p");
	xmlText.textContent = Data.note.body;
	xmlText.classList.add("para");

	element.appendChild(xmlText);

	const csvText = document.createElement("p");
	csvText.textContent = Notes;
	csvText.classList.add("para");

	element.appendChild(csvText);
	return element;
}
document.body.appendChild(componentLodash());
