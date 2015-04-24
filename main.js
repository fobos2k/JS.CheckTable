var maxTableRows    = 4;
var maxTableColumns = 4;

document.onreadystatechange = function() {
  if (document.readyState == "complete") {
    checkTable = new CheckTable();
    
    var imageTest = document.getElementById("image_00");
    if ( imageTest == null )
	debugger;

    // System.Gadget.settingsUI = 'settings.html';
    // System.Gadget.onSettingsClosed = SettingsClosed;
    // System.Gadget.unDock = ResizeGadget;
    // System.Gadget.onDock = ResizeGadget;
  }
}

// Конструктор объекта CheckTable
function CheckTable()
{
    // Чтение сохранённых настроек
    LoadSettings();
    var iRowsNum = maxTableRows;
    var iColsNum = maxTableColumns;

    var mainTablePlace = document.getElementById('mainTable');
    var mainTable = document.createElement('table');
    mainTable.border = 1;

    // DEBUG!
    var textTest = document.getElementById('Test');
    
    // Шапка таблицы
    var newHeaderRow = document.createElement('tr');
    newHeaderRow.id = 'headerRow';
    for (var i = 0; i < iColsNum + 1; i++ ) {
	var newHeaderCell = document.createElement('th');
	newHeaderCell.id = 'header_' + i;
	newHeaderCell.className = 'colHeader';
	if ( i > 0) {
	    newHeaderCell.innerHTML = 'Конф.';
	    newHeaderCell.onclick = TextChange;
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
	newHeaderCell.onclick = TextChange;
	newRow.appendChild(newHeaderCell);
	for ( var j = 0; j < iColsNum; j++ ) { // Колонки
	    var newCell = document.createElement('td');
	    newCell.id = 'cell_' + i + j;
	    newCell.className = 'cellCheck';
	    newRow.appendChild(newCell);

	    // Рисунок
	    var imgCheck = document.createElement('img');
	    imgCheck.src = 'img/no_check.png';
	    imgCheck.alt = '-';
	    imgCheck.width = 32;
	    imgCheck.height = 32;
	    imgCheck.id  = 'image_' + i + j;
	    
	    // DEBUG!
	    if ( textTest != null )
   		textTest.innerHTML = textTest.innerHTML + "<br/>" + imgCheck.id;

	    imgCheck.setAttribute('checkState', "false");
	    //imgCheck.addEventListener("click", CheckChange);
	    imgCheck.onclick = CheckChange;
	    newCell.appendChild(imgCheck);
	}
    }

    mainTablePlace.appendChild(mainTable);
    mainTablePlace.width = "500";
}

// Изменение содержимого ячейки с отметкой
function CheckChange (event)
{
  // получить объект событие.
  // вместо event лучше писать window.event
  event = event || window.event;

  if ( this.getAttribute('checkState') == "true" ) {
      this.src = 'img/no_check.png';
      this.alt = '-';
      this.setAttribute('checkState', "false");
  }
  else {
      this.src = 'img/check.png';
      this.alt = '+';
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

// Чтение сохранённых настроек
function LoadSettings ()
{
    maxTableRows    = 4;
    maxTableColumns = 4;
}

// Изменение размеров
function ResizeGadget ()
{
    bd = 1;
}

// Закрытие окна с настройками
function SettingsClosed ()
{
    
}

// DEBUG!!!
function TestClick()
{
    if (this.innerHTML == "Test" )
	this.innerHTML = "No test...";
    else
	this.innerHTML = "Test";
}
