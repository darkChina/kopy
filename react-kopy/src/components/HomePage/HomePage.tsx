import { Strategies } from "../Strategies/Strategies";

const data = [
  {
    name: "Alex",
    risk: 9,
    investors: 90,
  },
  {
    name: "Jane",
    risk: 7,
    investors: 230,
  },
  {
    name: "Kot",
    risk: 1,
    investors: 2390,
  },
];

export const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <h2>Strategies</h2>
      <Strategies strategies={data} />
      <h2>My trades</h2>
    </div>
  );
};
