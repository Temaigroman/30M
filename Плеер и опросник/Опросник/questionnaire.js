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
        }
    }

    let muscles = document.getElementsByName("chose_muscles");
    for (let k = 0; k < muscles.length; ++k) {
        if (muscles[k].checked) {
            user_chose['Muscles'].push(muscles[k].value);
        }
    }

    let qualities = document.getElementsByName("chose_qualities");
    for (let o = 0; o < qualities.length; ++o) {
        if (qualities[o].checked) {
            user_chose['Qualities'].push(qualities[o].value);
        }
    }

    let equpment = document.getElementsByName("chose_equpment");
    for (let j = 0; j < equpment.length; ++j) {
        if (equpment[j].checked) {
            user_chose['Equpment'].push(equpment[j].value);
        }

    }
    let json = JSON.stringify(user_chose)
    console.log(json)
    fetch('http://your-api-url.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_chose)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
}
