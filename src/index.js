import _ from "lodash";

/** Lodash: */
function componentLodash() {
	const element = document.createElement("div");

	element.innerHTML = _.join(["Hello", "webpack"], " ");

	return element;
}
document.body.appendChild(componentLodash());
