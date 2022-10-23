let blue = 0
let red = 0

highlightSide()

function highlightSide(){

    document.getElementById("left")
    .addEventListener("dblclick", (e)=>{
        if(blue % 2 === 0){
            document.getElementById("left").style.backgroundColor = "rgb(0,0,150)";
        }
        else{
            document.getElementById("left").style.backgroundColor = "rgb(0,0,100)";
        }

        blue++
})


    document.getElementById("right")
    .addEventListener("dblclick", (e)=>{
        if(red % 2 === 0){
            document.getElementById("right").style.backgroundColor = "rgb(150,0,0)";
        }
        else{
            document.getElementById("right").style.backgroundColor = "rgb(100,0,0)";
        }

        red++
})
}


