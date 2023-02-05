function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  
  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return (weight / (height * height)).toFixed(2).replace('.', ',');
}
function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  var imcResult = document.querySelector('#imcResult');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  imcResult.textContent = imc;
}

start();
