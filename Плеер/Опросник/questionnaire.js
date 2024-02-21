var btn = document.getElementById('push_answerts');
btn.onclick = function () {
    let user_chose = {
        'Ready': [],
        'Muscles': [],
        'Qualities': [],
        'Equpment': [],
    }

    let ready = document.getElementsByName("chose_ready");
    for (let i = 0; i < ready.length; ++i) {
        if (ready[i].checked) {
            user_chose['Ready'].push(ready[i].value);
            //let decision_ready = ready[i];
            //console.log(decision_ready.value); //что бы проверять выбор
        }
    }

    let muscles = document.getElementsByName("chose_muscles");
    for (let k = 0; k < muscles.length; ++k) {
        if (muscles[k].checked) {
            user_chose['Muscles'].push(muscles[k].value);
            //let decision_muscles = muscles[k];
            //console.log(decision_muscles.value);

        }
    }

    let qualities = document.getElementsByName("chose_qualities");
    for (let o = 0; o < muscles.length; ++o) {
        if (qualities[o].checked) {
            user_chose['Qualities'].push(qualities[o].value);
            //let decision_qualities = qualities[o];
            //console.log(decision_qualities.value);
        }
    }
    
    let equpment = document.getElementsByName("chose_equpment");
    for (let j = 0; j < equpment.length; ++j) {
        if (equpment[j].checked) {
            user_chose['Equpment'].push(equpment[j].value);
            //let decision_equpment = qualities[j];
            //console.log(decision_equpment.value);

        }

    }
    console.log(user_chose);
}


