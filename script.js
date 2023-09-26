const display = document.getElementById("display");
const historyList = document.getElementById("history-list");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calcular() {
    const result = eval(display.value);
    display.value = result;
    addToHistory(display.value);
}

function addToHistory(expression) {
    const listItem = document.createElement("li");
    listItem.textContent = expression;
    historyList.appendChild(listItem);

    // Guardar historial
    const history = localStorage.getItem("history") || [];
    history.push(expression);
    localStorage.setItem("history", JSON.stringify(history));
}

function clearHistory() {
    historyList.innerHTML = "";
    localStorage.removeItem("history");
}

// Cargar historial
const savedHistory = localStorage.getItem("history");
if (savedHistory) {
    const history = JSON.parse(savedHistory);
    history.forEach(addToHistory);
}
