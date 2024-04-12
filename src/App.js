import './App.css';
import DraggableComponent from './components/DraggableComponent';
import header from './components/header';

function App() {
  return (
    <div className="App">
      <header name="Reactjs Todo" />
      <DraggableComponent>
      </DraggableComponent>
    </div>
  );
}

export default App;
