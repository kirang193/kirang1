var hr = 0, min = 0, sec = 0, count = 0;
var timer = false;

function start(){
    timer = true;
    stopwatch();
}
function stop(){
    timer = false;
}
function reset(){
    timer = false;
    hr = 0, min = 0, sec = 0, count = 0;
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
}
function stopwatch(){
    if(timer){
        count++;
        var countS = count;
        if(count<10){
            countS = "0" + countS;
        }
        document.getElementById("count").innerHTML = countS;
        
        if(count==100){
            count = 0;
            sec++;
            var secS = sec;
            if(sec<10){
                secS = "0" + secS;
            }
            document.getElementById("sec").innerHTML = secS;
            if(sec==60){
                sec = 0;
                min++;
                var minS = min;
                if(min<10){
                    minS = "0" + minS;
                }
                document.getElementById("min").innerHTML = minS;
                if(min == 60){
                    min = 0;
                    hr++;
                    var hrS = hr;
                    if(hr<10){
                        hrS = "0" + hrS;
                    }
                    document.getElementById("hr").innerHTML = hrS;
                }
            }
        }
        setTimeout("stopwatch()", 10);
    }
}