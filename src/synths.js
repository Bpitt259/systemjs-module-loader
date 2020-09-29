import { getSynthesizers } from "./gear";

export default function () {
  console.log("loaded synths");
  const { synthesizers } = getSynthesizers();
  return synthesizers;
}
