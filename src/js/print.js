import _ from "lodash";

export default function printMe() {
  console.log("I get called from print.js!");
}

export function joinPrint(...args) {
  return _.join(args, " ");
}
