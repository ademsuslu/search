import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const fetchData = async () => {
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );

    const response = res.data;
    setResult(response.drinks);
  };
  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div className="App">
      <div className="container p-3">
        <input
          className="input-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          type="text"
        />
      </div>
      <div className="d-flex ">
        <ul className="d-flex flex-row flex-wrap justify-content-center">
          {result &&
            result.map((drink) => {
              const {
                strDrink,
                strDrinkThumb,
                strIngredient1,
                strInstructionsIT,
              } = drink;
              return (
                <li className="m-3" key={strDrink}>
                  <div className="card ">
                    <div className="">
                      <img src={strDrinkThumb} alt="drink" />
                      <div className="card-body">
                        <span>{strDrink}</span>
                        <h4>{strIngredient1}</h4>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
