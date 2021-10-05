import React from "react";

import Home from "./pages/Home";

import themes from "./themes.json";
import { setToLS } from "./utils/storage";

function App() {
  setToLS("all_themes", themes);
  return <Home />;
}

export default App;
