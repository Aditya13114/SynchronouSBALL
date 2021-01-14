class  Form{
    constructor(){}



    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(235,0);

        var  input = createInput("Name");
        var button = createButton('PLAY');

        input.position(250,160);
        button.position(350,200);



        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name  = input.value();
            playerCount += 1;

            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement('h3');
            greeting.html("HELLO "+name);
            greeting.position(235,150);
        })
    }
}