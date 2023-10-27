const colorInput = document.getElementById("color-input");
const colorHeader = document.getElementById("color-header");
const colorFooter = document.getElementById("color-footer");

colorInput.addEventListener("input",changeColor);

function changeColor(){
    const color1 = colorInput.value;
    colorHeader.style.backgroundColor = color1;
    colorFooter.style.backgroundColor = color1;
    
}

 