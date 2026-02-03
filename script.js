const buttonConvert = document.querySelector(".convert-button")
const currencyConverted = document.querySelector(".currency-value")
const currencyToConvert = document.querySelector(".currency-value-to-convert")
const currencySelect = document.querySelector(".currency-select")


const dolarToday = 5.489
const euroToday = 6.56
const libraToday = 7.52
const pesoArgentino = 0.0038
const ieneToday = 0.035

function convertValues(){
    const inputCurrency = document.querySelector(".input-currency").value

    currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency: "BRL"
    }).format(inputCurrency)
    

    switch(currencySelect.value){
        case "dolar":
           currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrency / dolarToday)
        break
        
        case "euro":
           currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrency / euroToday)
        break

        case "libra":
           currencyConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrency / libraToday)
        break

        case "pesoargentino":
           currencyConverted.innerHTML = new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS"
            }).format(inputCurrency / pesoArgentino)
        break

        case "iene":
           currencyConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY"
            }).format(inputCurrency / ieneToday)
        break
    }   

    
}

function changeCurrency(){
    const currencyImg = document.querySelector(".currency-img")
    const currencyNames = document.getElementById("currency-names")

    switch(currencySelect.value){
        case "dolar":
            currencyImg.src = "./assets/dolar.png"
            currencyNames.innerHTML = "Dólar"
        break
        
        case "euro":
            currencyImg.src = "./assets/euro.png"
            currencyNames.innerHTML = "Euro"
        break

        case "libra":
            currencyImg.src = "./assets/libra.png"
            currencyNames.innerHTML = "Libra"
        break

        case "pesoargentino":
            currencyImg.src = "./assets/ar-peso.png"
            currencyNames.innerHTML = "Peso Argentino"
        break

        case "iene":
            currencyImg.src = "./assets/japao.png"
            currencyNames.innerHTML = "Yen"
        break
    }

    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
buttonConvert.addEventListener("click", convertValues)