"use strict"
// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function() {

        const {languages} = this.skills;
    
        for (let i = 0; i < languages.length; i++) {
            languages[i] = languages[i].toUpperCase()
        }
                
        console.log(`Мне ${this.age} и я владею языками: ${languages[0]} ${languages[1]}`)
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))










function showProgrammingLangs(plan) {

    const {programmingLangs} = plan.skills;
    let str = '';
    
    for (let key in programmingLangs) {

        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;

        }
    console.log(str);
    return str;
}
// showProgrammingLangs(personalPlanPeter)





































