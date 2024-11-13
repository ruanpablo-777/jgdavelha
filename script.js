let quadrado = document.querySelectorAll(".quadrado")
let player = document.getElementById("player")
let verifica = document.getElementById("verifica")
let control = 0
let deuVelha = 0

let jgVelha = [
    ['','',''],
    ['','',''],
    ['','',''],
]
quadrado.forEach((element, number) => {
    element.addEventListener("click", () => {
        if(element.innerHTML == '') {
            if(control % 2 == 0) {
                element.innerHTML = "X"
                player.innerHTML = "sua vez jogador O"
                control++

            }else {
            
                element.innerHTML = 'O'
                player.innerHTML = "sua vez jogador X"
                control++
            }
        }
        switch (number) {
            case 0 :
                jgVelha[0][0] = element.innerHTML
                break
            case 1 :
                jgVelha[0][1] = element.innerHTML
                break
            case 2 : 
                jgVelha[0][2] = element.innerHTML
                break
            case 3 : 
                jgVelha[1][0] = element.innerHTML
                break
            case 4 : 
                jgVelha[1][1] = element.innerHTML
                break
            case 5 : 
                jgVelha[1][2] = element.innerHTML
                break
            case 6 : 
                jgVelha[2][0] = element.innerHTML
                break
            case 7 : 
                jgVelha[2][1] = element.innerHTML
                break
            case 8 : 
                jgVelha[2][2] = element.innerHTML
                break

        }
       

        
        if (jgVelha[0][0] == "X" && jgVelha[0][1] == "X" && jgVelha[0][2] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
        }
        else if (jgVelha[1][0] == "X" && jgVelha[1][1] == "X" && jgVelha[1][2] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
        }
        else if (jgVelha[2][0] == "X" && jgVelha[2][1] == "X" && jgVelha[2][2] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
        }


        else if (jgVelha[0][0] == "X" && jgVelha[1][0] == "X" && jgVelha[2][0] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
        }
        else if (jgVelha[0][1]== "X" && jgVelha[1][1]== "X" && jgVelha[2][1] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
        }
        else if (jgVelha[0][2]== "X" && jgVelha[1][2]== "X" && jgVelha[2][2] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
        }

        else if (jgVelha[0][0] == "X" && jgVelha[1][1] == "X" && jgVelha[2][2] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
        }
        else if (jgVelha[0][2] == "X" && jgVelha[1][1] == "X" && jgVelha[2][0] == "X") {
            player.innerHTML = "Jogador X venceu !!"
            verifica.innerHTML = ''
        }

        // jogador O

        else if (jgVelha[0][0] == "O" && jgVelha[0][1] == "O" && jgVelha[0][2] == "O") {
            player.innerHTML = "Jogador O venceu !!"
        }
        else if (jgVelha[1][0] == "O" && jgVelha[1][1] == "O" && jgVelha[1][2] == "O") {
            player.innerHTML = "Jogador O venceu !!"
        }
        else if (jgVelha[2][0] == "O" && jgVelha[2][1] == "O" && jgVelha[2][2] == "O") {
            player.innerHTML = "Jogador O venceu !!"
        }


        else if (jgVelha[0][0] == "O" && jgVelha[1][0] == "O" && jgVelha[2][0] == "O") {
            player.innerHTML = "Jogador O venceu !!"
        }
        else if (jgVelha[0][1] == "O" && jgVelha[1][1] == "O" && jgVelha[2][1] == "O") {
            player.innerHTML = "Jogador O venceu !!"
        }
        else if (jgVelha[0][2] == "O" && jgVelha[1][2] == "O" && jgVelha[2][2] == "O") {
            player.innerHTML = "Jogador O venceu !!"
        }

        else if (jgVelha[0][0] == "O" && jgVelha[1][1] == "O" && jgVelha[2][2] == "O") {
            player.innerHTML = "Jogador O venceu !!"
        }
        else if (jgVelha[0][2] == "O" && jgVelha[1][1] == "O" && jgVelha[2][0] == "O") {
            player.innerHTML = "Jogador O venceu !!"

        } 
        else if(control == 9) {
            verifica.innerHTML = "Deu Velha"
            player.innerHTML = ""
        }
        
        


        
        
        console.log(jgVelha)
        console.log(element)
        console.log(number)
        console.log(control)
        
        
    })
});


