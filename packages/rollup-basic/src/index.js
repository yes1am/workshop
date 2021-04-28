import foo from "./foo.json";

import bar from "./bar";

import answer from "the-answer";

console.log(bar, foo.version, answer);

const index = () => {
  console.log("this is index");
};

export default index;
