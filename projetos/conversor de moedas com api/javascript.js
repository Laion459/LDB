const label_from_currency = document.getElementById("from_currency");
const input_from_ammount = document.getElementById("from_ammount");
const label_to_currency = document.getElementById("to_currency");
const input_to_ammount = document.getElementById("to_ammount");


const tax_info = document.getElementById("tax_info");
const swap = document.getElementById("swap");

label_from_currency.addEventListener("change" , calculate);
input_from_ammount.addEventListener("input", calculate);
label_to_currency.addEventListener("change" , calculate);
input_to_ammount.addEventListener("input", calculate);

swap.addEventListener("click", infoSwap);

main();

function main() {
    let currency = {
        "ARS": "Peso Argentino",
        "BRL": "Real",
        "EUR": "Euro",
        "USD": "Dólar",
        "JPY": "Iene",
        "GBP": "Libra Esterlina",
        "AUD": "Dólar Australiano",
        "CAD": "Dólar Canadense",
        "CHF": "Franco Suíço",
        "CNY": "Yuan Chinês",
        "HKD": "Dólar de Hong Kong",
        "NZD": "Dólar Neozelandês",
        "SEK": "Coroa Sueca",
        "KRW": "Won Sul-Coreano",
        "SGD": "Dólar de Cingapura",
        "NOK": "Coroa Norueguesa",
        "MXN": "Peso Mexicano",
        "INR": "Rupia Indiana",
        "RUB": "Rublo Russo",
        "ZAR": "Rand Sul-Africano",
        "TRY": "Lira Turca"
    };

    options = [];
    for(let [key, value] of Object.entries(currency)){
        options.push(`<Option value='${key}'>${value}</Option>`);
    }

    label_from_currency.innerHTML = options.join('\n');
    label_to_currency.innerHTML = options.join('\n');

    calculate();
};

function infoSwap(){
    let temp = label_from_currency.value;
    label_from_currency.value = label_to_currency.value;
    label_to_currency.value = temp;

    calculate();
}

async function getURL(url){
    return (await fetch(url)).json();
}

function getInfoSelect(select){
    return select.options[select.selectedIndex].text;
}

async function calculate(){
    let from = label_from_currency.value;
    let to = label_to_currency.value;

    let {rates} = await getURL(`https://api.exchangerate-api.com/v4/latest/${from}`);

    let rate = rates[to];
    tax_info.innerText = `1 ${getInfoSelect(label_from_currency)} = ${rate} ${getInfoSelect(label_to_currency)}`;
    input_to_ammount.value = (input_from_ammount.value * rate).toFixed(2);
}





const textoParagrafo = document.getElementById("texto");
const palavras = textoParagrafo.textContent.split(" "); 
const spanDinamica = document.createElement("span");
textoParagrafo.textContent = " "; 
textoParagrafo.appendChild(spanDinamica);

let indicePalavra = 1;

function mostrarProximaPalavra() {
  if (indicePalavra < palavras.length) {
    const palavraAtual = palavras[indicePalavra];
    spanDinamica.textContent += palavraAtual + " "; 
    indicePalavra++;

    setTimeout(mostrarProximaPalavra, 1000); 
  } else {
    
    indicePalavra = 0;
    spanDinamica.textContent = "";
    setTimeout(mostrarProximaPalavra, 0); 
  }
}

mostrarProximaPalavra();

