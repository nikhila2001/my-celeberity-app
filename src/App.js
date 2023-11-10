// Importing CSS files for styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// Importing the CelebrityList component
import CelebrityList from "./components/CelebrityList";

// Functional component representing the main App
function App() {
  return (
    <div className="App wrapper">
      {/* Rendering the CelebrityList component */}
      <CelebrityList />
    </div>
  );
}
// Exporting the App component as the default export
export default App;
