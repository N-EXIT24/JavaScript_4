let num = +prompt ("Введите любое число")

for(let i = 1; i <= num; i++){
    if(i %2 == 0){
        console.log(i + " = четное число") ;
    }
    else{
        console.log(i + " = Не четное число") ;
    }
}