sirokumapoint = 0;

function pushSirokuma() {
    sirokumapoint = sirokumapoint + 1;
    document.getElementById('pointHyouji').innerHTML = sirokumapoint + "&nbsp しろくま";
}

function pushClicker() {
    sirokumapoint = sirokumapoint + 100000; /* 100,000 */
    document.getElementById('pointHyouji').innerHTML = sirokumapoint + "&nbsp しろくま";
}

function pushSirokumaTitle() {
    sirokumapoint = sirokumapoint + 1000000000; /* 1,000,000,000 */
    document.getElementById('pointHyouji').innerHTML = sirokumapoint + "&nbsp しろくま";
}