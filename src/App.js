import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const apiHandler = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    apiHandler();
  }, []);

  return (
    <div className="App">
      <h1> hello </h1>
      {students.map((student, index) => (
        <div key={index}>
          <li>{student.name}</li>
        </div>
      ))}
    </div>
  );
}

export default App;
