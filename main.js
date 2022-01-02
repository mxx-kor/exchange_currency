let currencyRatio = {
    USD:{
        KRW: 1184.36,
        USD: 1,
        MXN: 20.50,
        unit: "달러"
    },
    KRW:{
        KRW: 1,
        USD: 0.00084,
        MXN: 0.017,
        unit: "원"
    },
    MXN:{
        KRW: 58.00,
        USD: 0.049,
        MXN: 1,
        unit: "페소"
    }
};

let fromCurrency = 'USD';
let toCurrency = 'USD';

document.querySelectorAll("#from-currency-list a").forEach(menu => 
    menu.addEventListener("click", function(){
        document.getElementById("from-btn").textContent = this.textContent;
        fromCurrency = this.textContent;
    })
);

document.querySelectorAll("#to-currency-list a").forEach(menu => 
    menu.addEventListener("click", function(){
        document.getElementById("to-btn").textContent = this.textContent;
        toCurrency = this.textContent;
        console.log(toCurrency)
    })
);

