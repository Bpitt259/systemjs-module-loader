const specFiles = ["synths", "gear"];
const loadSpec = (spec) => System.load(`./src/${spec}.spec.js`);
const specMap = specFiles.map((spec) => loadSpec(spec));

// return list of loaded specs, if they resolve then render spec results
const specs = Promise.all(specMap).then(() => {
  window.onload();
});
