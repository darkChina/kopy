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
  return <Strategies strategies={data} />;
};
