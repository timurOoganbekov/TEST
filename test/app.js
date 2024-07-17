const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false 
//////// 1 - ^^^



const logEverySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
};

logEverySecond();
/////// 2 - ^^^



const count = () => {
    let i = 1;
    const interval = setInterval( () => {
        console.log(i);
        if (i === 10){
            clearInterval(interval)
        }
        i++
    }, 1000);
};

count();
///// 3 - ^^^

const colorBlock = document.querySelector('.colorBlock')

colorBlock.addEventListener('click', () => {
    colorBlock.classList.toggle('bg-color');
});
/////// 4 - ^^^ 


