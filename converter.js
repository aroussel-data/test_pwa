const inputRiseField = document.getElementById('input-rise');
const inputRunField = document.getElementById('input-run');
const toUnitField = document.getElementById('output-unit');
const outputMsrmtField = document.getElementById('output-msrmt');
const form = document.getElementById('converter');

function convertSlope(rise, run, msrmt_unit) {
  if (msrmt_unit === '0025') {
      return (rise/run) * 100;
    } else {
      return 180 * Math.atan(rise/run) / Math.PI;
    }
}

form.addEventListener('input', () => {
  const inputRise = parseFloat(inputRiseField.value);
  const inputRun = parseFloat(inputRunField.value);
  const toUnit = toUnitField.value;

  const outputMsrmt = convertSlope(inputRise, inputRun, toUnit);
  if (isNaN(outputMsrmt)) {
    throw new Error('Error during calculation');
  }
  outputMsrmtField.value = Math.round(outputMsrmt) + ' ' + String.fromCharCode(parseInt(toUnit, 16));
});
