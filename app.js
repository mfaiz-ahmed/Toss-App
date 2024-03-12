
const image = document.querySelector('#coin-image')


// tossButton

function tossButton(user){
const toss = Math.ceil(Math.random()*2); 




    if (toss === 1 && user === 'Chand' || toss === 2 && user === 'Masjid') {
        console.log('You Won');
    }else{
        console.log('You lose');
    }
}