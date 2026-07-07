const input = document.getElementById("input-text");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        if(button.value == "="){

            input.value = eval(input.value);

        }
        else if(button.value == "X"){
            input.value= " ";
        }
        else {
             input.value += button.value;
        }

    });

});