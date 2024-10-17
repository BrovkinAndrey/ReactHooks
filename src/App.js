import Table from './Table';
import Counter from './Counter';

const list = [
  {
    id: 1,
    firstName: 'Amaya',
    lastName: 'Torphy',
    jobTitle: 'Legacy Group Facilitator',
    email: 'Rosie_Mann@gmail.com',
  },
  {
    id: 2,
    firstName: 'Weston',
    lastName: 'Huel',
    jobTitle: 'Regional Data Agent',
    email: 'Tristian_Vandervort68@yahoo.com',
  },
  {
    id: 3,
    firstName: 'Bridgette',
    lastName: 'Corwin',
    jobTitle: 'Internal Usability Officer',
    email: 'Sherman.Purdy@hotmail.com',
  },
];

const App = () => {
  return (
    <>
      <Table data={list} />
      <Counter />
    </>
  );
};

export default App;
