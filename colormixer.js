//  this is  a color mixer project using switch-case
function colormixer(color1, color2) {
  switch (color1) {
    case "red":
        // case"blue":
      switch (color2) {
        case "blue":
          console.log("purple");
          break;
          case"red":
          console.log("purple")
          break;
        case "yellow":
          console.log("orange");
          break;
        default:
          console.log("Invalid color combination");
          break;
      }
  }
  switch(color1){
    case"yellow":
    switch(color2){
        case"blue":
        console.log("green");
        break;
        case"red":
        console.log("orange");
        break;
        default:console.log("invalid color");
        break;
    }
  }
  switch(color1){
    case"blue":
    switch(color2){
        case"red":
        console.log("purple");
        break;
        case"yellow":
        console.log("green");
        break;
        default:console.log("invalid color");
        break;
    }
  }
}
colormixer("red", "blue");
colormixer("blue", "red");
colormixer("red", "yellow");
colormixer("yellow", "red");
colormixer("blue", "yellow");
colormixer("yellow", "blue");
colormixer("yellow","white");
