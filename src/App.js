import { useState } from "react";
import Menu from "./Menu";
import Table from "./Table";
import Counter from "./Counter";
import Buttons from "./Buttons";
import DinamicForm from "./DinamicForm";
import "./App.css";

const list = [
  {
    id: 1,
    firstName: "Amaya",
    lastName: "Torphy",
    jobTitle: "Legacy Group Facilitator",
    email: "Rosie_Mann@gmail.com",
  },
  {
    id: 2,
    firstName: "Weston",
    lastName: "Huel",
    jobTitle: "Regional Data Agent",
    email: "Tristian_Vandervort68@yahoo.com",
  },
  {
    id: 3,
    firstName: "Bridgette",
    lastName: "Corwin",
    jobTitle: "Internal Usability Officer",
    email: "Sherman.Purdy@hotmail.com",
  },
];

const listComponents = {
  DinamicForm: <DinamicForm />,
  Buttons: <Buttons count={5} />,
  Counter: <Counter />,
  Table: <Table data={list} />,
};

const App = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <Menu
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        list={Object.keys(listComponents)}
      />
      {listComponents[activeItem] ?? null}
    </>
  );
};

export default App;
