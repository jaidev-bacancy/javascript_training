function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

let ptr = 0;

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    const colors = ['purple', 'violet', 'blue', 'orange', 'seagreen'];
    ptr++;
    ptr %= colors.length;

    const clock = document.getElementById('clock');
    clock.innerHTML = h + ":" + m + ":" + s
    clock.style.color = colors[ptr];
    clock.style.border = `1px solid ${colors[ptr]}`; 

    const year = document.getElementById('year');
    year.textContent = today.getFullYear();
    year.style.fontSize = '64px';
    year.style.color = colors[ptr];

    const doneTasks = document.getElementsByClassName('done');
    const ongoingTasks = document.getElementsByClassName('ongoing');
    const comingTasks = document.getElementsByClassName('coming');

    for (let i = 0; i < doneTasks.length; i++) {
        doneTasks[i].style.backgroundColor = 'rgb(0, 200, 0)';
    }

    for (let i = 0; i < ongoingTasks.length; i++) {
        ongoingTasks[i].style.backgroundColor = 'rgb(250, 250, 0)';
    }
    for (let i = 0; i < comingTasks.length; i++) {
        comingTasks[i].style.backgroundColor = 'rgb(250, 0, 0)';
    }

    setTimeout(startTime, 1000);
}

startTime();