    function chessBoard(arg) {
        let size = Number(arg)
        let currentColour = 'black'
        let previousColour = ''
        console.log('<div class="chessboard">');
     
        for (let rows = 1; rows <= size; rows++) {
            console.log('  <div>');
     
            for (let columns = 1; columns <= size; columns++) {
                console.log(`    <span class="${currentColour}"></span>`);
     
                previousColour = currentColour;
                if (currentColour == "black") {
                    currentColour = "white";
                } else {
                    currentColour = "black";
                }
                
            }
     
            console.log('  </div>')
            if (size % 2 === 0) {
                previousColour = currentColour;
                if (currentColour == "black") {
                    currentColour = "white";
                } else {
                    currentColour = "black";
                }
            }
        }
     
        console.log('</div>');
    }
    chessBoard(3)
