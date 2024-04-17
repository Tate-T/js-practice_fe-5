const movies = [
    {
        name: "Harry Potter and the Sorcerer's Stone",
        year: 2001,
        stotyline: `This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Rubeus Hagrid (Robbie Coltrane), the groundskeeper for Hogwarts, and quickly thrown into a world completely foreign to both him and the viewer. Famous for an incident that happened at his birth, Harry makes friends easily at his new school. He soon finds, however, that the wizarding world is far more dangerous for him than he would have imagined, and he quickly learns that not all wizards are ones to be trusted.—Carly`,
        rate: 7.6,
        poster: 'https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg',
    },
    {
        name: "Dune",
        year: 2021,
        stotyline: `A mythic and emotionally charged hero's journey, "Dune" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.—Warner Bros.`,
        rate: 7.7,
        poster: 'https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
    {
        name: "Avatar",
        year: 2009,
        stotyline: `When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridge's intentions of driving off the native humanoid "Na'vi" in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers knowledge, of the Indigenous Race and their Culture, for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Na'vi people with the use of an "avatar" identity. While Jake begins to bond with the native tribe and quickly falls in love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora.—The Massie Twins`,
        rate: 7.9,
        poster: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
    },
    {
        name: "Suicide Squad",
        year: 2016,
        stotyline: `It feels good to be bad...Assemble a team of the world's most dangerous, incarcerated Super Villains, provide them with the most powerful arsenal at the government's disposal, and send them off on a mission to defeat an enigmatic, insuperable entity. U.S. intelligence officer Amanda Waller has determined only a secretly convened group of disparate, despicable individuals with next to nothing to lose will do. However, once they realize they weren't picked to succeed but chosen for their patent culpability when they inevitably fail, will the Suicide Squad resolve to die trying, or decide it's every man for himself?—ahmetkozan`,
        rate: 5.9,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_FMjpg_UX1000_.jpg',
    },
    {
        name: "Resident Evil: Death Island",
        year: 2023,
        stotyline: `D.S.O. agent Leon S. Kennedy is on a mission to rescue Dr. Antonio Taylor from kidnappers, when a mysterious woman thwarts his pursuit. Meanwhile, B.S.A.A. agent Chris Redfield is investigating a zombie outbreak in San Francisco, where the cause of the infection cannot be identified. The only thing the victims have in common is that they all visited Alcatraz Island recently. Following that clue, Chris and his team head to the island, where a new horror awaits them.`,
        rate: 5.7,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTU4YmExZGItNDdkMC00MjJjLWI3MDAtNmQzMDZkMjRkZDlhXkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_FMjpg_UX1000_.jpg',
    },
    {
        name: "Harry Potter and the Sorcerer's Stone",
        year: 2001,
        stotyline: `This is the tale of Harry Potter (Daniel Radcliffe), an ordinary eleven-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Rubeus Hagrid (Robbie Coltrane), the groundskeeper for Hogwarts, and quickly thrown into a world completely foreign to both him and the viewer. Famous for an incident that happened at his birth, Harry makes friends easily at his new school. He soon finds, however, that the wizarding world is far more dangerous for him than he would have imagined, and he quickly learns that not all wizards are ones to be trusted.—Carly`,
        rate: 7.6,
        poster: 'https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg',
    },
    {
        name: "Dune",
        year: 2021,
        stotyline: `A mythic and emotionally charged hero's journey, "Dune" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.—Warner Bros.`,
        rate: 7.7,
        poster: 'https://m.media-amazon.com/images/M/MV5BMDQ0NjgyN2YtNWViNS00YjA3LTkxNDktYzFkZTExZGMxZDkxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
    {
        name: "Avatar",
        year: 2009,
        stotyline: `When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridge's intentions of driving off the native humanoid "Na'vi" in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers knowledge, of the Indigenous Race and their Culture, for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Na'vi people with the use of an "avatar" identity. While Jake begins to bond with the native tribe and quickly falls in love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora.—The Massie Twins`,
        rate: 7.9,
        poster: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
    },
    {
        name: "Suicide Squad",
        year: 2016,
        stotyline: `It feels good to be bad...Assemble a team of the world's most dangerous, incarcerated Super Villains, provide them with the most powerful arsenal at the government's disposal, and send them off on a mission to defeat an enigmatic, insuperable entity. U.S. intelligence officer Amanda Waller has determined only a secretly convened group of disparate, despicable individuals with next to nothing to lose will do. However, once they realize they weren't picked to succeed but chosen for their patent culpability when they inevitably fail, will the Suicide Squad resolve to die trying, or decide it's every man for himself?—ahmetkozan`,
        rate: 5.9,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_FMjpg_UX1000_.jpg',
    },
    {
        name: "Resident Evil: Death Island",
        year: 2023,
        stotyline: `D.S.O. agent Leon S. Kennedy is on a mission to rescue Dr. Antonio Taylor from kidnappers, when a mysterious woman thwarts his pursuit. Meanwhile, B.S.A.A. agent Chris Redfield is investigating a zombie outbreak in San Francisco, where the cause of the infection cannot be identified. The only thing the victims have in common is that they all visited Alcatraz Island recently. Following that clue, Chris and his team head to the island, where a new horror awaits them.`,
        rate: 5.7,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTU4YmExZGItNDdkMC00MjJjLWI3MDAtNmQzMDZkMjRkZDlhXkEyXkFqcGdeQXVyODY5NzkyMjA@._V1_FMjpg_UX1000_.jpg',
    },
];
const moviesListEl = document.querySelector('.movies__list');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

movies.forEach(movie => moviesListEl.innerHTML += `
<li class="movies__item" data-name="${movie.name}">
    <h2 class="movies__title">${movie.name}</h2>
    <img class="movies__img" src="${movie.poster}" alt="poster ${movie.name}"/>
    <p class="movies__rate">${movie.rate}/10</p>
</li>
`);

moviesListEl.addEventListener('click', (e) => {
    const findMovie = e.target.closest('.movies__item') === null ? false : e.target.closest('.movies__item').dataset.name;
    if (findMovie) {
        const movie = movies.find(movie => movie.name === findMovie);
        backdrop.classList.remove('hidden')
        modal.innerHTML = `
            <h2 class="modal__title">${movie.name}</h2>
            <p class="modal__year">Year: ${movie.year}</p>
            <p class="modal__storyline">Storyline: ${movie.stotyline}</p>
        `
    }
});

backdrop.addEventListener('click', () => backdrop.classList.add('hidden'))