// Função que calcula o saldo do jogador (vitórias - derrotas)
function calculateRankedLevel(victories, defeats){
    return victories - defeats; // devolve o saldo
}

// Função que define o nível do jogador com base no saldo
function checkLevelPlayer(balance){
    let level = ""; // variável que vai guardar o nível

    // Definição do nível de acordo com o saldo
    if(balance <= 10){ 
        level = "Ferro";           // 0 a 10 → Ferro
    }
    else if(balance >= 11 && balance <= 20){
        level = "Bronze";          // 11 a 20 → Bronze
    }
    else if(balance >= 21 && balance <= 50){
        level = "Prata";           // 21 a 50 → Prata
    }
    else if(balance >= 51 && balance <= 80){
        level = "Ouro";            // 51 a 80 → Ouro
    }
    else if(balance >= 81 && balance <= 90){
        level = "Diamante";        // 81 a 90 → Diamante
    }
    else if(balance >= 91 && balance <= 100){
        level = "Lendário";        // 91 a 100 → Lendário
    }
    else if(balance >= 101){
        level = "Imortal";         // 101+ → Imortal
    }

    return level; // devolve o nível calculado
}

// ===== Dados do jogador =====
const victories = 20; // vitórias do jogador
const defeats = 10;   // derrotas do jogador

// ===== Chamadas das funções =====
const balanceVictories = calculateRankedLevel(victories, defeats); // calcula saldo
const level = checkLevelPlayer(balanceVictories);                   // define nível usando saldo

// ===== Saída =====
console.log(`O Herói tem de saldo de ${balanceVictories} está no nível de ${level}`); // mostra mensagem
