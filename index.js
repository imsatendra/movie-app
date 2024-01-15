const URL =
  "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const parentElement = document.querySelector(".main");



const createElement = (element) => document.createElement(element);

const createMoviesCard = (movies) => {
  for (let movie of movies) {
    // console.log(movie);
    // creating parent container
    const cardContainer = createElement("div");
    // console.log(cardContainer);
    cardContainer.classList.add("card", "shadow");
    // console.log(cardContainer);

    // creating img container

    const imgContainer = createElement("div");
    imgContainer.classList.add("card-image-container");

    // creating card image

    const imageEle = createElement("img");
    imageEle.classList.add("card-image");
    imageEle.setAttribute("src", `${IMGPATH}${movie.poster_path}`);
    // console.log(`${IMGPATH}${movie.poster_path}`);
    imageEle.setAttribute("alt", movie.title);
    imgContainer.appendChild(imageEle);

    cardContainer.appendChild(imgContainer);

    // creating card detils container

    const cardDetails = createElement("div");
    cardDetails.classList.add("movie-details");


    // card title
    const titleEle = createElement("p");
    titleEle.classList.add("title");
    titleEle.innerText = movie.title;

    cardDetails.appendChild(titleEle);

    // card genre

    const genreEle = createElement("p");
    genreEle.classList.add("genre");
    genreEle.innerText = movie.overview;
    // console.log(movie.overview);
    cardDetails.appendChild(genreEle);


    // rating and length container
    const movieRating = createElement("div");
    movieRating.classList.add("ratings");

    // star/rating

    const ratings = createElement("div");
    ratings.classList.add("star-rating");


    // star icon
    const starIcon = createElement("span");
    starIcon.classList.add("material-symbols-outlined");
    starIcon.innerText = "star";

    ratings.appendChild(starIcon);

    const vote = createElement("span");
    vote.innerText = movie.vote_average;
    // console.log(movie.vote_average);
    ratings.appendChild(vote);


    movieRating.appendChild(ratings);

    const dateDiv = createElement("div");

    const datePara = createElement("p");

    datePara.innerText = movie.release_date;

    dateDiv.appendChild(datePara);


    movieRating.appendChild(dateDiv);

    cardDetails.appendChild(movieRating);

    cardContainer.appendChild(cardDetails);

    parentElement.appendChild(cardContainer);
  }
};


const getMovies = async (url) => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {}
  };
  
  const movies = async () => {
    const movies = await getMovies(URL);
    console.log(movies.results);
    createMoviesCard(movies.results);
  };
  
  movies();