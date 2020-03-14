// Your code here

const dodger = document.querySelector("#dodger")

dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";

dodger.style.left; // "180px"
dodger.style.bottom; // "0px"

dodger.style.bottom = "0px";

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", " ");
    let left = parseInt(leftNumbers, 10);

    if ( left > 0 ) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10)
    
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }

document.addEventListener("keydown", event => {
    if ( event.key === "ArrowLeft" ) { 
        moveDodgerLeft();   
    }    
    // else if ( event.key === "ArrowRight" ) {
    //     moveDodgerRight();
    // }
})

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
  })