function tableCreate() {
    var body = document.body,
        tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';

    let array = ["Evidence Rating", "Effect", "Efficacy", "Consensus", "Comments", "A", "Power Output", "3 Stars", "80% 18 studies", "Coments content", "B", "Weight", "4 Stars", "100% 65 studies", "Coments content"];

    for (var i = 0; i < 3; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < 5; j++) {
            var td = tr.insertCell();
            td.appendChild(document.createTextNode(array[i * 5 + j]));
            td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);
}
tableCreate();