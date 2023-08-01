function appendToHistory(card, imgsrc)
{
    if (card.rank >= 4)
    {
        var selector = "#" + (card.type=="servant" ? "servant" : "craft_essence")
                        + "_" + (card.rank==4?"sr":"ssr") + "_list";
        var content = "<img src='" + imgsrc + "' />";
        $(selector).append(content);
    }
}

function drawOnce(card)
{
    var c = $("canvas#cards-canvas")[0];
    var ctx = c.getContext("2d");
    ctx.drawImage(imgBg, 0, 0);

    var img = new Image();
    var type = card.type=="servant" ? "servant" : "equip";
    // img.src = "http://file.fgowiki.591mogu.com/fgo/card/" + type + "/" + card.id + "A.jpg";
    img.src = (card.type=="servant") ? 
        "card/" + card.id + ".png" :
        "card/" + card.id + ".png";

    img.onload = function(){
        ctx.drawImage(img,525, 180);
    };

    appendToHistory(card, img.src);
}

function drawCombo(card, x, y)
{
    var c = $("canvas#cards-canvas")[0];
    var ctx = c.getContext("2d");
    
    ctx.drawImage(imgBg, 0, 0);

    var img = new Image();
    img.src = (card.type=="servant") ? 
        "card/" + card.id + ".png" :
        "card/" + card.id + ".png";

    img.onload = function(){
        ctx.drawImage(img, 150+ x * 150, 65 + y * 219);
    };

    appendToHistory(card, img.src);
}
