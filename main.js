document.onreadystatechange = function()
{
    if ( document.readyState == "complete" ) {
	checkTable = new CheckTable();
    }
}

// Конструктор объекта CheckTable
function CheckTable()
{
    document.getElementById('gadgetContent').innerHTML = '<h2>CheckTable -- кросстаблица с отметками</h2>';
    
    // Таблица
    var iColsNum = 3;
    var iRowsNum = 4;
    for ( var i = 0; i < iRowsNum; i++ ) {     // Строки
	document.getElementById('mainTable').innerHTML = '<tr>';
	for ( var j = 0; j < iColsNum; j++ ) { // Колонки
	    document.getElementById('mainTable').innerHTML = '<td>';
	    document.getElementById('mainTable').innerHTML = i + ' - ' + j;
	    document.getElementById('mainTable').innerHTML = '</td>';
	}
	document.getElementById('mainTable').innerHTML = '</tr>';
    }
}
