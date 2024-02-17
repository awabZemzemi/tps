function getrandom(max) {
    return Math.floor(Math.random() * max);
}

function jeu(difficulty) {
    let possibilities, Max, randomNumber;
    switch (difficulty) {
        case '3': 
            possibilities = 3;
            Max = 80;
            randomNumber = getrandom(Max);
            break;
        case '2': 
            possibilities = 5;
            Max = 50;
            randomNumber = getrandom(Max);
            break;
        case '1': 
        default:
            possibilities = 10;
            Max = 20;
            randomNumber = getrandom(Max);
            break;
    }

    for (let i = 1; i <= possibilities; i++) {
        const essai = parseInt(prompt(`donner un chiffre entre 1 et ${Max}`));
        if (essai === randomNumber) {
            alert("Bravo");
            return;
        } else if (essai > randomNumber) {
            alert("réessayez c inferieur");
        } else {
            alert("réessayez c supérieur");
        }
    }
    alert(`échec ! le nombre est ${randomNumber}`);
}


    
        function essai(){
            const difficulty = prompt("choisis le niveau de difficulté 1 / 2 / 3");
            jeu(difficulty);
            const rejoue=1;
            while (rejoue==1)
            {
            const rejoue=parseInt(prompt('tu veux rejouer ? tape 1 si oui 0 sinon'));
            if (rejoue==1){
                const difficulty = prompt("choisis le niveau de difficulté 1 / 2 / 3");
                jeu(difficulty); 
            }
            else{
                alert("le jeu est terminé");
                rejoue=0;
            }}
        }
           
        
    ;
