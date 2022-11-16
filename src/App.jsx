import { AppBar } from "./components";
import { Routes, Route } from "react-router-dom";
import { PageWrapper } from "./components";
import { TTTAncientGreecePage } from "./pages";
import { TimelinePage, Home, BrowseGamesPage, LoginPage, Register, UserHome, LogoutPage } from "./pages";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path="/games" element={<BrowseGamesPage />} />
          <Route path="/games/TTTAncientGreece" element={<TTTAncientGreecePage />} />
          {/* <Route path="login" element={<Login /> }/> */}
          <Route path="/games/timeline/:id" element={<TimelinePage />} />
          <Route path="/games/TTTAncientGreece" element={<TimelinePage />} />
          <Route path="/login" element={<LoginPage /> }/>
          <Route path="/register" element={<Register /> }/>
          <Route path="/user" element={<UserHome /> }/>
          <Route path="/logout" element={<LogoutPage /> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


