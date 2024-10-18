function roundToDecimal(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}

function calculateParty() {
    let party = document.getElementById("partyType").value;
    let additional = document.getElementById("Additional").value;
    party = party * additional;
    let totalCost = party * 1.047;
    document.getElementById("answer").textContent = `Price: $${roundToDecimal(party, 2)}.00`;
    document.getElementById("answer2").textContent = `Tax: $${roundToDecimal((party * 1.047) - party, 2)}`;
    document.getElementById("answer3").textContent = `Total: $${roundToDecimal(totalCost, 2)}`;
}