let currentStock = "NSE:RELIANCE";
let tvWidget = null;

function loadChart(symbol) {

    currentStock = symbol;

    const container = document.getElementById("tradingview_chart");

    if (!container) {
        return;
    }

    // Existing TradingView chart को नया symbol दें
    if (tvWidget && typeof tvWidget.activeChart === "function") {

        try {
            tvWidget.activeChart().setSymbol(symbol, "D");
            return;
        } catch (error) {
            console.log("Symbol change error:", error);
        }
    }

    // First chart load
    container.innerHTML = "";

    tvWidget = new TradingView.widget({
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
        container_id: "tradingview_chart"
    });
}


function changeStock() {

    const select = document.getElementById("stockSelect");

    if (!select) {
        return;
    }

    const selectedStock = select.value;

    console.log("Selected:", selectedStock);

    loadChart(selectedStock);
}


function portfolioMessage() {

    alert("Portfolio Tracker is coming soon! 📊");

}


document.addEventListener("DOMContentLoaded", function () {

    console.log("Shyam Finance Hub loaded");

    loadChart("NSE:RELIANCE");

});