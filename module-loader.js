"use strict";

import gear, { getSynthesizers } from "./src/gear";
import synths from "./src/synths";

const loadModules = () => {
  const modules = [gear(), synths(getSynthesizers())];

  modules.forEach((module) => {
    const node = document.createElement("LI");
    const moduleName = document.createTextNode(module);
    node.appendChild(moduleName);

    document.getElementById("module-list").appendChild(node);
  });
};

loadModules();
