// Створіть блок на сторінці, який реагує на рух миші. Кожен раз, коли користувач рухає мишкою, змінюються координати точки на графіку відповідно до руху миші. Використайте метод throttle з бібліотеки lodash для того, щоб координати оновлювалися не занадто часто та не затримували користувача. Встановіть час затримки в мілісекундах, наприклад 50 мс, і передайте функцію, яка буде виконуватися при русі миші.

const pointEl = document.querySelector('#point');
const coordEl = document.querySelector('#coord');

const movePoint = (e) => {
    coordEl.innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
    pointEl.setAttribute('cx', e.clientX);
    pointEl.setAttribute('cy', e.clientY);
}

document.addEventListener('mousemove', _.throttle((e) => movePoint(e), 50));