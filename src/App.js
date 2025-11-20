
import './App.css';
import Show from "./show";

const  data = [
  {movie: 'the matrix', rating:8.9,actors:['ariel','ali','david']},
  {movie: 'the dark king', rating:9.9,actors:['kiril','aliko','dav']},
  {movie: 'the demon', rating:7.9,actors:['yosef','youvl','dar']},
    {movie: 'tokyo gohll', rating:9.9,actors:['ban','escanor','alain']},
]
function App() {
  return (
    <div className="App">
      <h1>movies🎥</h1>

             <Show data={data} />




    </div>
  );
}

export default App;
