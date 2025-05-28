import { people } from "@/data/teams";
import TeamsItem from "./TeamsItem/TeamsItem";

export default function TeamsList() {
  return (
    <ul
      role="list"
      className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
    >
      {people.map((person) => (
        <TeamsItem data={person} key={person.name} />
      ))}
    </ul>
  );
}
