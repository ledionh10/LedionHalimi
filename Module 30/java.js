var x = 5;
if(x>2){
    console.log("x is greater than 2");
   }
    else{
        console.log("x is smaller than 2");
    }


    var input = document.getElementById('input_id');
    var button = document.getElementById('btn_id');
    var text = document.getElementById('text_id');

    button.onclick = function (){
        text.innerHTML= input.value;
    }
    var input1 = document.getElementById('input1_id');
    var button1 = document.getElementById('hello_id');
    var input2= document.getElementById('input2_id');
    var button2 = document.getElementById('Digital_id');
    var input3 = document.getElementById('input3_id');
    var button3 = document.getElementById('click_id');
    var text1 = document.getElementById('text1_id');

    button.onclick = function (){
    text1.innerHTML= input1.value+input2.value;
    }
