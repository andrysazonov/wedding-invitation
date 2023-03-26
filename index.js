const dict={
    "yara-maria":{
        welcome: "Дорогие Ярослав и Мария!",
        wedding: "Мы приглашаем вас пойти да поплясать на нашей свадьбе!"
    },
//2
    "shtol":{
        welcome: "Дорогие Сергей Александрович, Алёна Евгеньевна и Тимофей!"
    },
//5
    "sazonovy":{
        welcome: "Дорогие Павел Владимирович, Ольга Вячеславовна, Серёжа и Саша!"
    },
//9
    "konovalovy":{
        welcome: "Дорогие Евгений Николаевич и Галина Ивановна!"
    },
//11
    "kronberg-shtol":{
        welcome: "Дорогие Владислав Борисович и Татьяна Николаевна!"
    },
//13
    "kronberg":{
        welcome: "Дорогие Евгений, Марина и Виктория!"
    },
//15
    "potapovy":{
        welcome: "Дорогие Вячеслав Евгеньевич и Люмила Михайловна!"
    },
//17
    "irina":{
        welcome: "Дорогая Ирина!"
    },
//19
    "dedovy":{
        welcome: "Дорогие Кирилл и Аня!"
    },
//21
    "vasilenko":{
        welcome: "Дорогие Данил и Екатерина!"
    },
//23
    "sannikovy":{
        welcome: "Дорогие Петя, Даша, Сёма и Зоя!"
    },
//27
    "vatergo":{
        welcome: "Дорогие vatergo и Долюзя Педюшкина!"
    },
//29
    "lil-lewadny":{
        welcome: "Здравствуйтяяяо, Александр и Виктория!"
    },
//31
    "chiskunov":{
        welcome: "Дорогие Семён и Алина!"
    },
//33
    "gav-gav":{
        welcome: "Дорогие Алексей и Сажина!"
    },
//35
    "pilipp-alena":{
        welcome: "Дорогие Филипп и Алёна!"
    },
//37
    "ubrr-one-love":{
        welcome: "Дорогие Серёжа и Лида!"
    },
//39
    "kontur-one-love":{
        welcome: "Дорогие Никита и Даша!"
    },
//41
    "poltora":{
        welcome: "Дорогие Костя и Лера!"
    },
//43
    "tibik":{
        welcome: "Дорогие Егор и Даша!"
    },
//45
    "gospozha-shrein":{
        welcome: "Дорогая Оля!"
    },
//46
    "lublu-pivo":{
        welcome: "Дорогой Денис!"
    },
//47
    "inna-lena":{
        welcome: "Дорогие Инна и Лена!",
        wedding: "Спасибо вам, что делаете вместе с нами лучшую свадьбу!"
    },
}



const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const p=new URLSearchParams(window.location.search)
// for (const [key, value] of p) {
//     console.log(key, value)
// }
let value = params;

const welcomeBlock=document.querySelector("#welcome-string")
const welcomeWedBlock=document.querySelector("#welcome-wed")
if(dict[params["guest"]]){
    let guest = dict[params["guest"]]
welcomeBlock.innerHTML=guest.welcome

if(guest.wedding){
    welcomeWedBlock.innerHTML = guest.wedding
}
}
