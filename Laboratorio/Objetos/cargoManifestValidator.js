function normalizeUnits(manifest) {
  const manifestCopy = { ...manifest };

  if (manifestCopy.unit == "lb") {
    manifestCopy.unit = "kg";
    manifestCopy.weight = manifestCopy.weight * 0.45;
  }
  return manifestCopy;

}

function validateManifest(manifest) {
  const errores = {};

  if (manifest.containerId === undefined) {
    errores.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number" || manifest.containerId <= 0 || !Number.isInteger(manifest.containerId)) {
    errores.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
    errores.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim().length === 0) {
    errores.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    errores.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    errores.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    errores.unit = "Missing";
  } else if (typeof manifest.unit !== "string" || (manifest.unit !== "lb" && manifest.unit !== "kg")) {
    errores.unit = "Invalid";
  }

  if (manifest.hazmat === undefined) {
    errores.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errores.hazmat = "Invalid";
  }

  return errores;
}

function processManifest(manifest) {

  const errores = validateManifest(manifest);

  if (Object.keys(errores).length === 0) {
    const peso = normalizeUnits(manifest);

    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${peso.weight} kg`);
  }
  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errores);
  }
}