export default function gerarNumeros(ballsQuantity){

    const numbersArray = []

    while(numbersArray.length != ballsQuantity){
        let randomNumber = Math.floor(Math.random() * 60) + 1;

        if(!numbersArray.includes(randomNumber)){
            if(randomNumber < 10) randomNumber = "0" + randomNumber
            numbersArray.push(randomNumber);
        }
    }

    return numbersArray.sort()
}