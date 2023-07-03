var mode = 0;
var array = [];
var difference = [];
var tdifference = [];
var adifference = [];

function add() {
    if (document.querySelector("#numberInput").value == "") {
        document.querySelector("#add").animate(
            {
                color: ["#ff0000"],
                border: ["0.2vmin #ff0000 solid"]
            },
            {
                fill: "forwards",
                easing: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                duration: 200
            }
        );
        setTimeout(() => {
            document.querySelector("#add").animate(
                {
                    color: ["black"],
                    border: ["0.2vmin black solid"]
                },
                {
                    fill: "forwards",
                    easing: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                    duration: 200
                }
            );
        }, 200)
    } else {
        array.push(Number(document.querySelector("#numberInput").value));
        document.querySelector("#numberInput").value = "";
        document.querySelector("#array").innerHTML = array.join(", ")
    }
}

function predict() {
    difference = [];
    tdifference = [];
    adifference = [];
    if (array.length < 2) {
        document.querySelector("#predict").animate(
            {
                color: ["#ff0000"],
                border: ["0.2vmin #ff0000 solid"]
            },
            {
                fill: "forwards",
                easing: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                duration: 200
            }
        );
        setTimeout(() => {
            document.querySelector("#predict").animate(
                {
                    color: ["black"],
                    border: ["0.2vmin black solid"]
                },
                {
                    fill: "forwards",
                    easing: "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                    duration: 200
                }
            );
        }, 200)
    } else {
        if (mode == 0) {
            adifference = array;
            // for each hierarchy
            for (var n = 0; n < array.length - 1; n++) {
                tdifference = [];
                // for each number
                for (var m = 0; m < adifference.length - 1; m++) {
                    tdifference.push(adifference[m + 1] - adifference[m])
                }
                difference.push(tdifference);
                adifference = tdifference;
            }
            var t = 0;
            for (var n = 0; n < difference.length; n++) {
                console.log(difference[n][difference[n].length - 1]);
                t += difference[n][difference[n].length - 1];
            }
            array.push(array[array.length - 1] + t);
            document.querySelector("#numberInput").value = "";
            document.querySelector("#array").innerHTML = array.join(", ");
        } else {
            adifference = array;
            // for each hierarchy
            for (var n = 0; n < array.length - 1; n++) {
                tdifference = [];
                // for each number
                for (var m = 0; m < adifference.length - 1; m++) {
                    tdifference.push(adifference[m + 1] / adifference[m]);
                }
                difference.push(tdifference);
                adifference = tdifference;
            }
            var t = 1;
            for (var n = 0; n < difference.length; n++) {
                console.log(difference[n][difference[n].length - 1]);
                t *= difference[n][difference[n].length - 1];
            }
            array.push(Math.round(array[array.length - 1] * t));
            document.querySelector("#numberInput").value = "";
            document.querySelector("#array").innerHTML = array.join(", ");
        }
    }
}

function addition() {
    mode = 0;
    Object.assign(document.querySelector("#addition").style, {
        color: "#007FC4",
        border: "0.2vmin #007FC4 solid"
    });
    Object.assign(document.querySelector("#multiplication").style, {
        color: "black",
        border: "0.2vmin black solid"
    });
}

function multiplication() {
    mode = 1;
    Object.assign(document.querySelector("#addition").style, {
        color: "black",
        border: "0.2vmin black solid"
    });
    Object.assign(document.querySelector("#multiplication").style, {
        color: "#007FC4",
        border: "0.2vmin #007FC4 solid"
    });
}
