import myName from "./myName";
import { cube, foo, graph } from "./test";
import { myFunction, myVariable, MyClass } from "./parentModule.js";
import { myValue } from "./other-examples/mutatedModule.js";
import * as myModule from "./other-examples/mutatedModule.js";

/** myName: */
function componentCustom() {
	const elementCustom = document.createElement("div");

	elementCustom.textContent = myName("Shelby");
	return elementCustom;
}
document.body.appendChild(componentCustom());

/** Test: */
graph.options = {
	color: "blue",
	thickness: "3px",
};

graph.draw();
console.log(cube(3)); // 27
console.log(graph.options);
console.log(foo); // 4.555806215962888

/** Child - Parent | Aggregation: 
// In top-level module
// We can consume the exports from a single module since parentModule
// "collected"/"bundled" them in a single source
*/

/** Mutated Module: */

console.log(myValue); // 1
console.log(myModule.myValue); // 1
setTimeout(() => {
	console.log(myValue); // 2; my-module has updated its value
	console.log(myModule.myValue); // 2
	myValue = 3; // TypeError: Assignment to constant variable.
	// The importing module can only read the value but can't re-assign it.
}, 1000);
