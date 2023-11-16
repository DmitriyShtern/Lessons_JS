// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). 
// Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное 
// или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"



function acceptsAnInteger(i) {
    let hour = 0,
        min = 0;


    if (i % 1 == 0 && typeof i === 'number' && i >= 0) {
        if (i >= 60) {
            while(i >= 60) {
                i = i - 60
                hour++
            }   
        } else {
            min = i;
        }
        min = i;
        
    } else {
        return "Ошибка, проверьте данные";
    }


    if (hour === 1) {
        hour = `Это ${hour} час и `
     
    } else if (hour > 1 && hour <= 4) {
        hour = `Это ${hour} часа и `
      
    } else {
        hour = `Это ${hour} часов и `
       
    }
   

    if (min === 1 || min === 21 || min === 31 || min === 41 || min === 51) {
        min = `${min} минута`
    } else if (min > 1 && min <= 4 || min > 21 && min <= 24 || min > 31 && min <= 34 || min > 41 && min <= 44 || min > 51 && min <= 54) {
        min = `${min} минуты`
    } else {
        min = `${min} минут`
    } 
    return hour + min;

}
acceptsAnInteger(1)






function acceptsAnInteger(i) {
    const SPECIAL_MINUTES = [1, 21, 31, 41, 51];

    if (Number.isInteger(i) && i >= 0) {
        let hour = 0, min = 0;

        if (i >= 60) {
            while (i >= 60) {
                i -= 60;
                hour++;
            }
        } else {
            min = i;
        }

        const hourString = (hour === 1) ? `Это ${hour} час и ` :
                           (hour > 1 && hour <= 4) ? `Это ${hour} часа и ` :
                           `Это ${hour} часов и `;

        const minString = (SPECIAL_MINUTES.includes(min)) ? `${min} минута` :
                          (min > 1 && min <= 4 || (min > 21 && min <= 24) || (min > 31 && min <= 34) || (min > 41 && min <= 44) || (min > 51 && min <= 54)) ? `${min} минуты` :
                          `${min} минут`;

        const result = hourString + minString;
        console.log(result);
        return result;
    } else {
        return "Ошибка, проверьте данные";
    }
}

acceptsAnInteger(1);

















