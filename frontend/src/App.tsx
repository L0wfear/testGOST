import React from "react";
import UsesList from "./components/usersList/UsersList";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <UsesList />
      </div>
    </div>
  );
};

export default App;
