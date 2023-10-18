import { useState, useEffect } from "react";
import "./App.css";
import Person from "./components/person";
import PersonForm from "./components/PersonForm";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [results, setResults] = useState(persons);

  // const fetchPersons = async () => {
  //   const response = await axios.get("http://localhost:3001/persons");
  //   const data = await response.json();

  //   setPersons(data);
  //   setResults(data);
  // };

  useEffect(() => {
    axios.get(" http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setResults(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Phonebook App</h1>
      <Search persons={persons} setResults={setResults} />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setResults={setResults}
      />
      <h2>Numbers</h2>
      <ul>
        {results.map((person, index) => (
          <Person key={index} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
}

export default App;
