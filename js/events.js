// Створіть блок на сторінці, який реагує на рух миші. Кожен раз, коли користувач рухає мишкою, змінюються координати точки на графіку відповідно до руху миші. Використайте метод throttle з бібліотеки lodash для того, щоб координати оновлювалися не занадто часто та не затримували користувача. Встановіть час затримки в мілісекундах, наприклад 50 мс, і передайте функцію, яка буде виконуватися при русі миші.

const pointEl = document.querySelector('#point');
const coordEl = document.querySelector('#coord');

const movePoint = (e) => {
    coordEl.innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
    pointEl.setAttribute('cx', e.clientX);
    pointEl.setAttribute('cy', e.clientY);
}

document.addEventListener('mousemove', _.throttle((e) => movePoint(e), 50));

// 4-task
const tech = [
{ label: 'HTML' },
{ label: 'CSS' },
{ label: 'JavaScript' },
{ label: 'Node.js' },
{ label: 'React' },
{ label: 'Vue' },
{ label: 'Next.js' },
{ label: 'Mobx' },
{ label: 'Redux' },
{ label: 'React Router' },
{ label: 'GraphQl' },
{ label: 'PostgreSQL' },
{ label: 'MongoDB' },
];

// 1. Рендеримо розмітку елементів списку
// 2. Слухаємо зміни фільтру.
// 3. Фільтруємо дані та рендеримо нові елементи.

const inputEl = document.querySelector('#filter-input');
const resultEl = document.querySelector('.result-list');

const render = (techsArr) => {
    resultEl.innerHTML = '';
    techsArr.forEach(techArr => resultEl.innerHTML += `<li class='result-item'>${techArr.label}</li>`);
}

render(tech);

const renderFilter = (e) => render(tech.filter(techn => techn.label.includes(e.target.value)));

inputEl.addEventListener('input', _.debounce((e) => renderFilter(e),700))