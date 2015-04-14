document.onreadystatechange = function()
{
    if ( document.readyState == "complete" ) {
	checkTable = new CheckTable();
    }
}

// Конструктор объекта CheckTable
function CheckTable()
{
    // DEBUG!!!
    var iColsNum = 3;
    var iRowsNum = 4;

    var mainTable = document.getElementById('mainTable');
    
    // Шапка таблицы
    var newHeaderRow = document.createElement('tr');
    newHeaderRow.id = 'headerRow';
    for (var i = 0; i < iColsNum + 1; i++ ) {
	var newHeaderCell = document.createElement('th');
	newHeaderCell.id = 'header_' + i;
	newHeaderCell.className = 'colHeader';
	if ( i > 0) {
	    newHeaderCell.innerHTML = 'Конфигурация';
	    newHeaderCell.addEventListener("click", TextChange);
	}
	newHeaderRow.appendChild(newHeaderCell);
    }
    mainTable.appendChild(newHeaderRow);
    
    // Тело таблицы
    for ( var i = 0; i < iRowsNum; i++ ) {     // Строки
	var newRow = document.createElement('tr');
	newRow.id = 'row_' + i;
	mainTable.appendChild(newRow);
	
	var newHeaderCell = document.createElement('td');
	newHeaderCell.className = 'rowHeader';
	newHeaderCell.innerHTML = 'Вып.';
	newHeaderCell.addEventListener("click", TextChange);
	newRow.appendChild(newHeaderCell);
	for ( var j = 0; j < iColsNum; j++ ) { // Колонки
	    var newCell = document.createElement('td');
	    newCell.id = 'cell_' + i + j;
	    newCell.className = 'cellCheck';
	    newRow.appendChild(newCell);

	    // Рисунок
	    var imgCheck = document.createElement('img');
	    imgCheck.src = 'img/no_check.png';
	    imgCheck.id  = 'image_' + i + j;
	    imgCheck.setAttribute('checkState', "false");
	    imgCheck.addEventListener("click", CheckChange);
	    newCell.appendChild(imgCheck);
	}
    }
}

// Изменение содержимого ячейки с отметкой
function CheckChange (event)
{
  // получить объект событие.
  // вместо event лучше писать window.event
  event = event || window.event;

  if ( this.getAttribute('checkState') == "true" ) {
      this.src = 'img/no_check.png';
      this.setAttribute('checkState', "false");
  }
  else {
      this.src = 'img/check.png';
      this.setAttribute('checkState', "true");
  }  
}

// Изменение содержимого ячейки с заголовком
function TextChange (event)
{
    event = event || window.event;

    // Запрос нового текста
    var oldText = this.innerHTML;
    var newText = prompt("Введите новый заголовок", oldText);
    
    if ( newText != null )
	this.innerHTML = newText;
}

