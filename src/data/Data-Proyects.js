import carritoImg from "../assets/projectsImages/Carrito-compras-image.png";
import GifApp from "../assets/projectsImages/gifapp-image.png";
import moviesApp from "../assets/projectsImages/movies-app-image.png";
import weatherApp from "../assets/projectsImages/weather-image.png";
import taskTodoApp from "../assets/projectsImages/tasktodo-image.png";

export const projectsData = [
  {
    id: 1,
    title: "Carrito de compras",
    description: "Un carrito de compras con productos y precios",
    image: carritoImg,
    url: "https://flourishing-medovik-ac6219.netlify.app/",
  },
  {
    id: 2,
    title: "GifExpertApp",
    description: "Una app para buscar Gifs, consumiendo una api",
    image: GifApp,
    url: "https://gifs-experts-app-react-vite.netlify.app/",
  },
  {
    id: 3,
    title: "MoviesApp",
    description:
      "App para buscar peliculas por su nombre con informacion de la misma, consumiendo una api.",
    image: moviesApp,
    url: "https://angelayonv.github.io/Movies-search-API-React-vite/",
  },
  {
    id: 4,
    title: "WeatherApp",
    description:
      "App para saber la informacion del clima por ciudad, consumiendo una api.",
    image: weatherApp,
    url: "https://angelayonv.github.io/Weather-current-time-react-vite/",
  },
  {
    id: 5,
    title: "TaskTodoApp",
    description:
      "App para agregar tareas y eliminarlas, con un contador de tareas, utilizando useReduce, context api y local storage.",
    image: taskTodoApp,
    url: "https://angelayonv.github.io/todoApp-reduce/",
  },
];
