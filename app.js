
const image = document.querySelector('#coin-image')

const result = document.querySelector('.result')


// tossButton


function tossButton(user){
    const toss = Math.ceil(Math.random()*2); 
if (toss === 1) {
    image.src = 'https://flip-a-coin.com/img/coin/fc/heads_vs_tails_1.png'
    }else{
        image.src = 'https://flip-a-coin.com/img/coin/fc/heads_vs_tails_2.png'
    }

    if (toss === 1 && user === 'heads' || toss === 2 && user === 'tails') {
        result.innerHTML = 'Congratulations! You have won the toss! 🎉';
    }else{
        result.innerHTML = 'Looks like luck was not on your side this time. You have lost the toss.';
    }
}