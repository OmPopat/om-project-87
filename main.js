var canvas = new fabric.Canvas("myCanvas");

ranger_width = 150;
ranger_height = 250;

ranger_object = " ";


function newImg(getImg) {
    fabric.Image.fromURL(getImg , function(Img) {
        ranger_object = Img;
        ranger_object.scaleToWidth(ranger_width);
        ranger_object.scaleToHeight(ranger_height);
        ranger_object.set({
            top: 150,
            left: 15
        });
        canvas.add(ranger_object);
    });
}

window.addEventListener("keydown", ekeydown);

function ekeydown(e)
{
    keyPressed = e.keyCode;
    console.log("keyPessed:: "+keyPressed);

    if(keyPressed == "82"){
        newImg("Red Rangre Megaforce.png");
        console.log("keyPessed = r")
    }

    if(keyPressed == "80"){
        newImg("Pink Ranger Megaforce.jpg");
        console.log("keyPessed = p");
    }

    if(keyPressed == "66"){
        newImg("Blue Ranger Megaforce.png");
        console.log("keyPessed = b");
    }

    if(keyPressed == "71"){
        newImg("Green Ranger Megaforce.png")
        console.log("keyPessed = g");
    }

    if(keyPressed == "83"){
        newImg("Silver Ranger Megaforce.png")
        console.log("keyPessed = s");
    }
    if(keyPressed == "89"){
        newImg("Yellow Ranger megaforce.png"); 
        console.log("keyPessed = y");
    }


}