// src/App.jsx

import { Provider } from "react-redux";
import { store } from "@/store/store.js";
import AppRouter from "@/router/router.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;

