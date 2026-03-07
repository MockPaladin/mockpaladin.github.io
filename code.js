function greet() {

  if (document.getElementById("charlemange").innerHTML == "i like france") {
    
    document.getElementById("charlemange").innerHTML = "france is bad and nobody likes it";

  } else {

    document.getElementById("charlemange").innerHTML = "i like france";
  }
}