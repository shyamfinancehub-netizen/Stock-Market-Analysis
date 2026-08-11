let currentStock = "NSE:NIFTY";


function loadChart(symbol) {

    currentStock = symbol;

    document.getElementById("tradingview_chart").innerHTML = "";

    new TradingView.widget({

        width: "100%",

        height: 500,

        symbol: symbol,

        interval: "D",

        timezone: "Asia/Kolkata",

        theme: "dark",

        style: "1",

        locale: "en",

        enable_publishing: false,

        allow_symbol_change: true,

        hide_side_toolbar: false,

        container_id: "tradingview_chart"

    });
}


/* STOCK SEARCH */

function changeStock() {

    const selectedStock =
        document.getElementById("stockSelect").value;

    loadChart(selectedStock);

}


/* PORTFOLIO */

function portfolioMessage() {

    alert(
        "Portfolio Tracker is coming soon! 📊"
    );

}


/* PAGE LOAD */

document.addEventListener("DOMContentLoaded", function () {

    loadChart("NSE:RELIANCE");

    console.log(
        "Shyam Finance Hub loaded successfully."
    );

});