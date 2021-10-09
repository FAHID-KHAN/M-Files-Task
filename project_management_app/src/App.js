import "./App.css";
import ProjectManagement from "./components/ProjectManagement";

function App() {
  const projects = [
    {
      id: 1,
      name: "Travel to Mars",
      state: "Launched",
    },
    {
      id: 2,
      name: "Launching Satelite",
      state: "Finished",
    },
    {
      id: 3,
      name: "Study: growing plants on Mars",
      state: "Not started",
    },
    {
      id: 4,
      name: "Study: new human generation on Mars",
      state: "Not started",
    },
  ];

  return (
    <div className="App">
      <ProjectManagement projects={projects} />
    </div>
  );
}

export default App;
