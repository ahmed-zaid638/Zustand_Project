import './App.css';
import Column from './components/Column';
function App() {
  const isActive = true
  return (
    <div className="App">
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="DONE" />
    </div>
  );
}

export default App;