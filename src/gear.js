export const getSynthesizers = () => {
  console.log("ran get synthesizers");
  return { synthesizers: ["roland", "moog", "korg"] };
};

export const getDrumMachines = () => {
  console.log("ran get drum machines");
  return { drummachines: ["elektron", "akai", "MPC"] };
};

export default function () {
  console.log("loaded gear");
  return "gear";
}
