var jsonData = '{"name": "hara-chan"}';
var jsonObject = JSON.parse(jsonData);
console.log(jsonObject.name);

function exportData(){
    var exportbuffer = '{"sirokumapoint": "' + sirokumapoint + '", "skillplus": "' + skillplus + '", "itemzouka": "' + itemzouka + '", "skillX10kakutoku": "' + skillX10kakutoku + '", "skillX100kakutoku": "' + skillX100kakutoku + '", "skillX1Kkakutoku": "' + skillX1Kkakutoku + '", "skillX10Kkakutoku": "' + skillX10Kkakutoku + '", "skillX100Kkakutoku": "' + skillX100Kkakutoku + '", "skillX1000Kkakutoku": "' + skillX1000Kkakutoku + '", "skillX10000Kkakutoku": "' + skillX10000Kkakutoku + '", "skillX100000Kkakutoku": "' + skillX100000Kkakutoku + '"}'
    console.log(exportbuffer)
    document.getElementById('writesave').innerHTML = exportbuffer;
}
/*
sirokumapoint = 0;
skillplus = 1;
itemzouka = 0;

skillX10kakutoku = 0;
skillX100kakutoku = 0;
skillX1Kkakutoku = 0;
skillX10Kkakutoku = 0;
skillX100Kkakutoku = 0;
skillX1000Kkakutoku = 0;
skillX10000Kkakutoku = 0;
skillX100000Kkakutoku = 0;

*/