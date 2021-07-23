import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthRouter from "./routes/authorizationRouter.js";
import AppRouter from "./routes/quotesRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
//<AuthRouter></AuthRouter>
