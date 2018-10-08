var event, ok;
var masTrasert=[];
var key;

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        yourTrasert("Вы вышли из игры");
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        yourTrasert(works.a1);
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                yourTrasert("Вы вышли из игры");
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                
            }
        } while (!ok);
        
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                yourTrasert(works.b1);
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        yourTrasert("Вы вышли из игры");
                        
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                yourTrasert(works.b2);
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        yourTrasert("Вы вышли из игры");
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        yourTrasert(works.a2);
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                yourTrasert("Вы вышли из игры");
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        
        switch (event) {
            case 1: // Второе действие
                yourTrasert(works.c1);
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        yourTrasert("Вы вышли из игры");
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                yourTrasert(works.c2);
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        yourTrasert("Вы вышли из игры");
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
while(1){
    key=parseInt(prompt("Введите номер хода или число меньше 1 для выхода"));
    if((key>0)&&(key<=masTrasert.length)){
        alert("Ваш "+ key +" ход " +masTrasert[key-1]);
    }
    else if(key>masTrasert.length){
        alert("Максимальное число ходов = " +masTrasert.length);
    }
    else
        break;
}


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
   
	return true;
    
}
//________________________________________
function yourTrasert(q){
    masTrasert.push(q) ;
    
}