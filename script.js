let currentStock = "NSE:RELIANCE";
let tvWidget = null;

function loadChart(symbol) {

    currentStock = symbol;

    const container = document.getElementById("tradingview_chart");

    if (!container) {
        console.log("Chart container not found");
        return;
    }

    // अगर chart पहले से बना है तो उसी chart का symbol बदलें
    if (tvWidget) {

        try {

            tvWidget.activeChart().setSymbol(
                symbol,
                "D"
            );

            return;

        } catch (error) {

            console.log(
                "Existing chart change failed:",
                error
            );

        }
    }

    // पहली बार chart बनाना
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

        hide_side_toolbar: false,

        container_id: "tradingview_chart"

    });

}


/* STOCK SEARCH */

function changeStock() {

    const stockSelect =
        document.getElementById("stockSelect");

    if (!stockSelect) {
        return;
    }

    const selectedStock =
        stockSelect.value;

    console.log(
        "Changing stock to:",
        selectedStock
    );

    loadChart(selectedStock);

}


/* PORTFOLIO */

function portfolioMessage() {

    alert(
        "Portfolio Tracker is coming soon! 📊"
    );

}


/* PAGE LOAD */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadChart("NSE:RELIANCE");

        console.log(
            "Shyam Finance Hub loaded successfully."
        );

    }
);