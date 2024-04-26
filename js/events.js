// 4-task
// // Створіть блок на сторінці, який реагує на рух миші. Кожен раз, коли користувач рухає мишкою, змінюються координати точки на графіку відповідно до руху миші. Використайте метод throttle з бібліотеки lodash для того, щоб координати оновлювалися не занадто часто та не затримували користувача. Встановіть час затримки в мілісекундах, наприклад 50 мс, і передайте функцію, яка буде виконуватися при русі миші.

// // const pointEl = document.querySelector('#point');
// // const coordEl = document.querySelector('#coord');

// // const movePoint = (e) => {
// //     coordEl.innerHTML = `X: ${e.clientX}, Y: ${e.clientY}`;
// //     pointEl.setAttribute('cx', e.clientX);
// //     pointEl.setAttribute('cy', e.clientY);
// // }

// // document.addEventListener('mousemove', _.throttle((e) => movePoint(e), 50));

// // 4-task
// const tech = [
// { label: 'HTML' },
// { label: 'CSS' },
// { label: 'JavaScript' },
// { label: 'Node.js' },
// { label: 'React' },
// { label: 'Vue' },
// { label: 'Next.js' },
// { label: 'Mobx' },
// { label: 'Redux' },
// { label: 'React Router' },
// { label: 'GraphQl' },
// { label: 'PostgreSQL' },
// { label: 'MongoDB' },
// ];

// // 1. Рендеримо розмітку елементів списку
// // 2. Слухаємо зміни фільтру.
// // 3. Фільтруємо дані та рендеримо нові елементи.

// const inputEl = document.querySelector('#filter-input');
// const resultEl = document.querySelector('.result-list');

// const render = (techsArr) => {
//     resultEl.innerHTML = '';
//     techsArr.forEach(techArr => resultEl.innerHTML += `<li class='result-item'>${techArr.label}</li>`);
// }

// render(tech);

// const renderFilter = (e) => render(tech.filter(techn => techn.label.includes(e.target.value)));

// inputEl.addEventListener('input', _.debounce((e) => renderFilter(e),700))

// 5-task
// Напишіть програму для керування списком задач з можливістю додавання, видалення та відмічання їх виконанням. Використовуйте делегування подій для зменшення кількості обробників подій та спрощення коду.
// 1. Створення списку задач та їх відображення на сторінці:
// Створити форму для додавання нової задачі з полем введення та кнопкою "Додати".
// Створити список, в який будуть додаватися всі нові задачі. Кожна задача має містити чекбокс для відмітки виконання та кнопку для видалення.
// При додаванні нової задачі до списку, вона має додаватися у вигляді нового елементу списку.
// Всі задачі мають зберігатися у масиві для зручного керування.
// 2. Відмічання виконання задач:
// Для кожної задачі у списку є чекбокс, при кліку на який задача повинна відмічатися як виконана.
// Виконані задачі мають змінювати свій стиль (наприклад, забарвлювання) для позначення їх статусу.
// 3. Видалення задач:
// Для кожної задачі у списку є кнопка "Видалити", при кліку на яку задача має видалятися зі списку та з масиву.
// 4. Делегування подій:
// Використовуйте делегування подій для зменшення кількості обробників подій та спрощення коду.
// Всі обробники подій мають бути підвішені на батьківський елемент списку.
// При додаванні нової задачі до списку, обробник події має бути доданий до новоствореного елементу списку.
// При відмічанні виконання або видаленні задачі, обробн

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const todos = [];


const addTodo = () => todoList.innerHTML += `
    <li id="todo-item">
        <input type="checkbox" id="todo-checkbox" data-id='${todos.length}'>
        <p id="todo-text">${todoInput.value}</p>
        <button type="button" id="todo-del" data-id='${todos.length}'>Del</button>
    </li>
`;

const toggleDone = (targ) => targ.parentNode.style.backgroundColor = targ.checked ? 'dodgerblue' : 'azure';

const deleteTodo = (targ) => targ.parentNode.remove();

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
    todos.push({ text: todoInput.value , isChecked: false});
});

todoList.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.getAttribute('id') === 'todo-checkbox') {
        toggleDone(e.target);
        todos[e.target.dataset.id].isChecked = e.target.checked;
    }
    else if (e.target.getAttribute('id') === 'todo-del') {
        deleteTodo(e.target);
        todos.splice(e.target.dataset.id, 1);
    }
});