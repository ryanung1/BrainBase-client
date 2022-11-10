import { AppBar } from "./components";
import { Routes, Route } from "react-router-dom";
import { PageWrapper } from "./components";
import { TimelinePage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />}/>
          <Route path="/games/timeline" element={<TimelinePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
