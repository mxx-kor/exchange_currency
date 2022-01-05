let currencyRatio = {
    USD:{
        KRW: 1192.90,
        USD: 1,
        MXN: 20.50,
        unit: "달러",
        img: "https://cdn-icons-png.flaticon.com/512/555/555526.png"
    },
    KRW:{
        KRW: 1,
        USD: 0.00084,
        MXN: 0.017,
        unit: "원",
        img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png"
    },
    MXN:{
        KRW: 58.00,
        USD: 0.049,
        MXN: 1,
        unit: "페소",
        img: "https://icons.iconarchive.com/icons/wikipedia/flags/512/MX-Mexico-Flag-icon.png"
    }
};

let fromCurrency = 'USD';
let toCurrency = 'KRW';
const fromResult = document.getElementById('from-result')
const toResult = document.getElementById('to-result')

document.querySelectorAll("#from-currency-list a").forEach(item => 
    item.addEventListener("click", function(){
        fromCurrency = this.id;
        document.getElementById('from-btn').innerHTML = `<img src="${currencyRatio[fromCurrency].img}"/> ${fromCurrency}`;
        fromResult.textContent = currencyRatio[fromCurrency].unit;
        convert();
    })
);

document.querySelectorAll("#to-currency-list a").forEach(item => 
    item.addEventListener("click", function(){
        toCurrency = this.id;
        document.getElementById('to-btn').innerHTML = `<img src="${currencyRatio[toCurrency].img}"/> ${toCurrency}`;
        toResult.textContent = currencyRatio[toCurrency].unit;
        convert();  
    })
);


function threeNumsComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convert() {
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById("to-input").value = threeNumsComma(convertedAmount.toFixed(1));  
    fromResult.textContent = `${threeNumsComma(amount)} ${currencyRatio[fromCurrency].unit}`
    toResult.textContent = `${threeNumsComma(convertedAmount.toFixed(1))} ${currencyRatio[toCurrency].unit}`
}

function reverseConvert() {
    let amount = document.getElementById("to-input").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    document.getElementById("from-input").value = threeNumsComma(convertedAmount.toFixed(1));
    toResult.textContent = `${threeNumsComma(amount)} ${currencyRatio[toCurrency].unit}`
    fromResult.textContent = `${threeNumsComma(convertedAmount.toFixed(1))} ${currencyRatio[fromCurrency].unit}`
}

document.getElementById("from-input").addEventListener("keyup", convert);
document.getElementById("to-input").addEventListener("keyup", reverseConvert);
