const movies = [
    {
        name: "Qurollangan qizaloq (premyera, o'zbek tilida, Uzbek)",
        image: "image/Qurollangan qizaloq (premyera, o'zbek tilida, Uzbek).png",
    },
    {
        name: "Qutqaruv topshirig'i 2: Zarba nuqtasi",
        image: "image/Qutqaruv topshirig'i 2_ Zarba nuqtasi.png",
    },
    {
        name: "Topshiriqdagi odam / Missioner",
        image: "image/Missioner.png",
    },
    {
        name: "Marshall",
        image: "image/Marshall.png",
    },
    {
        name: "Yomg'irdagi uchrashuv",
        image: "image/Yomg'irdagi uchrashuv.png",
    },
    {
        name: "O'g'irlik Talonchilik premyera uzbek o'zbek tilida",
        image: "image/O'g'irlik Talonchilik premyera uzbek o'zbek tilida.png",
    },
    {
        name: "Hech kim 2 premyera uzbek o'zbek tilida",
        image: "image/Hech kim 2 premyera uzbek o'zbek tilida.png",
    },
    {
        name: "Telma premyera uzbek o'zbek tilida",
        image: "image/Telma premyera uzbek o'zbek tilida.png",
    },
    {
        name: "Umrning so'ngi bahori premyera uzbek o'zbek tilida",
        image: "image/Umrning so'ngi bahori premyera uzbek o'zbek tilida.png",
    },
    {
        name: "Oramizda istanbul premyera uzbek o'zbek tilida",
        image: "image/Oramizda istanbul premyera uzbek o'zbek tilida.png",
    },
    {
        name: "Hayvonlarning yozgi olimpiadasi uzbek o'zbek tilida",
        image: "image/Hayvonlarning yozgi olimpiadasi uzbek o'zbek tilida.png",
    },
    {
        name: "Hayvonlarning qishki olimpiadasi uzbek o'zbek tilida",
        image: "image/Hayvonlarning qishki olimpiadasi uzbek o'zbek tilida.png",
    },
    {
        name: "Qiziquvchan maymuncha Jorj uzbek o'zbek tilida",
        image: "image/Qiziquvchan maymuncha Jorj uzbek o'zbek tilida.png",
    },
    {
        name: "Tun soqchilari uzbek o'zbek tilida",
        image: "image/Tun soqchilari uzbek o'zbek tilida.png",
    },
    {
        name: "Afsonaviy mamlakat uzbek o'zbek tilida",
        image: "image/Afsonaviy mamlakat uzbek o'zbek tilida.png",
    },
    {
        name: "Mikkining yovuzlar uyi uzbek o'zbek tilida",
        image: "image/Mikkining yovuzlar uyi uzbek o'zbek tilida.png",
    },
    {
      name: "Qurollangan qizaloq (premyera, o'zbek tilida, Uzbek)",
      image: "image/Qurollangan qizaloq (premyera, o'zbek tilida, Uzbek).png",
  },
  {
      name: "Qutqaruv topshirig'i 2: Zarba nuqtasi",
      image: "image/Qutqaruv topshirig'i 2_ Zarba nuqtasi.png",
  },
  {
      name: "Topshiriqdagi odam / Missioner",
      image: "image/Missioner.png",
  },
  {
      name: "Marshall",
      image: "image/Marshall.png",
  },
  {
    name: "Yomg'irdagi uchrashuv",
    image: "image/Yomg'irdagi uchrashuv.png",
},
{
    name: "O'g'irlik Talonchilik premyera uzbek o'zbek tilida",
    image: "image/O'g'irlik Talonchilik premyera uzbek o'zbek tilida.png",
},
{
    name: "Hech kim 2 premyera uzbek o'zbek tilida",
    image: "image/Hech kim 2 premyera uzbek o'zbek tilida.png",
},
{
    name: "Telma premyera uzbek o'zbek tilida",
    image: "image/Telma premyera uzbek o'zbek tilida.png",
}
]

const moviesGrid = document.getElementById("moviesGrid");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "bg-gray-800 rounded-lg overflow-hidden shadow w-[210px] px-[10px] hover:shadow-lg transition cursor-pointer";

  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.name}" class="w-[200px] object-cover">
    <div class="p-4">
      <h3 class="text-[14px] w-[200px] font-semibold text-gray-200">${movie.name}</h3>
    </div>
  `;

  moviesGrid.appendChild(card);
});

const randomFilmDiv = document.getElementById("randomFilm");
const randomBtn = document.getElementById("randomBtn");

function showRandomMovie() {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const movie = movies[randomIndex];
}


  randomFilmDiv.innerHTML = `{}
    <img src="${movie.image}" alt="${movie.name}" class="w-full h-60 object-cover rounded-md mb-3">
    <h3 class="text-lg font-semibold">${movie.name}</h3>
  `;

showRandomMovie();
randomBtn.addEventListener("click", showRandomMovie);

const searchInput = document.querySelector("input[placeholder='Qidirish...']");

function displayMovies(filteredMovies) {
  moviesGrid.innerHTML = "";
  filteredMovies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "bg-gray-800 rounded-lg overflow-hidden shadow w-[210px] px-[10px] hover:shadow-lg transition cursor-pointer";

    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.name}" class="w-[200px] object-cover">
      <div class="p-4">
        <h3 class="text-[14px] w-[200px] font-semibold text-gray-200">${movie.name}</h3>
      </div>
    `;

    moviesGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = movies.filter(movie => movie.name.toLowerCase().includes(query));
  displayMovies(filtered);
});

displayMovies(movies);

    document.getElementById("header-toggle").addEventListener("click", () => {
      document.getElementById("header-menu").classList.toggle("hidden");
    });

    document.getElementById("section1-toggle").addEventListener("click", () => {
      document.getElementById("section1-menu").classList.toggle("hidden");
    });
    
