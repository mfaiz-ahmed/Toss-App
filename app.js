
const image = document.querySelector('#coin-image')

const result = document.querySelector('.result')


// tossButton


function tossButton(user){
    const toss = Math.ceil(Math.random()*2); 
if (toss === 1) {
    image.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
    }else{
        image.src = 'https://i.ebayimg.com/images/g/EQcAAOSw5mZhoOxs/s-l1200.webp'
    }

    if (toss === 1 && user === 'Chand' || toss === 2 && user === 'Masjid') {
        result.innerHTML = 'Congratulations! You have won the toss! 🎉';
    }else{
        result.innerHTML = 'Looks like luck was not on your side this time. You have lost the toss.';
    }
}