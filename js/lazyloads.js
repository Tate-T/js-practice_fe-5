const imgs = document.querySelectorAll('img');

// imgs.forEach(img => img.addEventListener('load', (e) => {
//     console.log('LOAD')
//     if ('loading' in HTMLImageElement.prototype) {
//         e.currentTarget.classList.add('load');
//     }
// }));

const onEntry = (entries, observer) => {
    console.log(observer)
    entries.forEach(entry => {
        entry.isIntersecting ? entry.target.classList.add('load') : entry.target.classList.remove('load');
    });
}

const observer = new IntersectionObserver(onEntry, {
    rootMargin: '50px',
    threshold: 0.5,
});

imgs.forEach(img => observer.observe(img));

