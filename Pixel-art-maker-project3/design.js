//variables
const height = "inputHeight"
const width  = "inputWidth"  
var pixel_Canvas = document.getElementById("pixelCanvas");
 



function OperateSubmit() {

// Selecting size of Canvas
    var canvas_height = document.getElementById("inputHeight").value;
    var canvas_width = document.getElementById("inputWidth").value;

    console.log(canvas_height + "," + canvas_width)

    console.log("click")

    //assign parameters 
    makeGrid(canvas_height, canvas_width);

    return false;
}




//creating grid view
function makeGrid(row, column) {

    
    pixel_Canvas.innerHTML = '';

    var i = 1;
    for (var x = 1; x <= row; x++) {

        var rowElement = document.createElement('tr');

        for (var y = 1; y <= column; y++) {

            var columnElement = document.createElement('td');
            columnElement.setAttribute("id", i)
            columnElement.setAttribute("onclick","coloring(this.id);");

            rowElement.appendChild(columnElement);

            i = i + 1;
        }

        pixel_Canvas.appendChild(rowElement);

    }

}


//after creating grid view , 
//calling coloring function for paint selecting color 

//Color picking and painting.
function coloring(id) {
    var block = document.getElementById(id);
    var color = document.getElementById('colorPicker').value;
    block.style.backgroundColor = color;
}




