//Практика:
//1. (Тема: Регулярные выражения)Создать форму с полями: бренд, продукт, цена, габариты (ВхШхГ), вес
//    Сделать проверку полей:
//        - Бренд и продукт должны содержать только буквы, пробелы (не числа)
//        - Цена - число с точностью до одной десятой (с точкой разделителем)
//        - габариты - целые числа, без точек, символов и пробелов
//        - вес - число с точностью до сотой, с указанием ед. измерения (кг или гр)
//    Если форма введена не верно, сделать вывод ошибки под полем в виде <div> блока с
//    сообщением об ошибке.

//2. Написать функцию setCookie(name, value, expires), которая принимает name, value,
//        expires (в секундах) и ставит куки с этими параметрами
//    Написать функцию getCookie(name), которая принимает имя куки и возвращает её значение.
//    Написать функцию deleteCookie(name), которая по имени удаляет куку


// 1) ////////////////////////////////////////////////////////////////////////////////////////////////
//function func(e) {
//var br = /^\w+$/i.test(document.querySelector('input[name="brand"]').value);
//if (/^\w+$/i.test(br)) {
//a = document.createElement('div');
//a.innerHTML = 'error'
//document.appendChild(s);
//}
//var pro = /^\d+\.\d{1}$/.test(document.querySelector('input[name="product"]').value);
//if (/^\d+\.\d{1}$/.test(pro)) {
//b = document.createElement('div');
//b.innerHTML = 'error'
//document.appendChild(b);
//}
//var pri = /\d/.test(document.querySelector('input[name="price"]').value);
//if (/\d/.test(pri)) {
//c = document.createElement('div');
//c.innerHTML = 'error'
//document.appendChild(c);
//}
//var si = /^\d+\.\d{2} (кг|гр)$/.test(document.querySelector('input[name="size"]').value);
//if (/^\d+\.\d{2} (кг|гр)$/.test(si)) {
//d = document.createElement('div');
//d.innerHTML = 'error'
//document.appendChild(d);
//}
//e.preventDefault();
//console.log(123);
//}

//document.getElementById("btn").addEventListener("click", func);

// 2) ////////////////////////////////////////////////////////////////////////////////////////////////

function setCookie(name, value, expires) {


    var date = new Date(new Date().getTime() + expires * 1000);

    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; " + "expires= " + date.toUTCString();
}

function getCookie(name) {
    document.cookie = encodeURIComponent(name) + "; " + "expires= " + date.toUTCString();
}

function deleteCookie(name) {
    var date = new Date(0);
    document.cookie = encodeURIComponent(name) + "; " + "expires= " + date.toUTCString();
}

setCookie("test2", 123, 1000)

var myCookie = getCookie('test2');
console.log(myCookie);