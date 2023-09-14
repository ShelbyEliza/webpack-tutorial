// In parentModule.js
// Only aggregating the exports from childModule1 and childModule2
// to re-export them
export { myFunction, myVariable } from "./other-examples/childModule1.js";
export { MyClass } from "./childModule2.js";
