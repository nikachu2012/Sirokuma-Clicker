var jsonData = '{"name": "hara-chan"}';
var jsonObject = JSON.parse(jsonData);
console.log(jsonObject.name);

function exportData(){
    var exportbuffer = '{"sirokumapoint": "' + sirokumapoint + '", "skillplus": "' + skillplus + '", "itemzouka": "' + itemzouka + '", "skillX10kakutoku": "' + skillX10kakutoku + '", "skillX100kakutoku": "' + skillX100kakutoku + '", "skillX1Kkakutoku": "' + skillX1Kkakutoku + '", "skillX10Kkakutoku": "' + skillX10Kkakutoku + '", "skillX100Kkakutoku": "' + skillX100Kkakutoku + '", "skillX1000Kkakutoku": "' + skillX1000Kkakutoku + '", "skillX10000Kkakutoku": "' + skillX10000Kkakutoku + '", "skillX100000Kkakutoku": "' + skillX100000Kkakutoku + '"}'
    console.log(exportbuffer)
    document.getElementById('writesave').innerHTML = '<textarea type="text" name="address" cols="50" rows="10">' + window.btoa(exportbuffer) + '</textarea>';
}

function importData(){
    valueJSON = window.prompt("セーブテキストを貼り付けてください。", "");
    var jsonbuffer = window.atob(valueJSON);
    var jsonObject = JSON.parse(jsonbuffer);
    // console.log(jsonObject.sirokumapoint);

    sirokumapoint = Number(jsonObject.sirokumapoint);
    skillplus = Number(jsonObject.skillplus);
    itemzouka = Number(jsonObject.itemzouka);

    skillX10kakutoku = Number(jsonObject.skillX10kakutoku);
    skillX100kakutoku = Number(jsonObject.skillX100kakutoku);
    skillX1Kkakutoku = Number(jsonObject.skillX1Kkakutoku);
    skillX10Kkakutoku = Number(jsonObject.skillX10Kkakutoku);
    skillX100Kkakutoku = Number(jsonObject.skillX100Kkakutoku);
    skillX1000Kkakutoku = Number(jsonObject.skillX1000Kkakutoku);
    skillX10000Kkakutoku = Number(jsonObject.skillX10000Kkakutoku);
    skillX100000Kkakutoku = Number(jsonObject.skillX100000Kkakutoku);
    
    updateHyouji();
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