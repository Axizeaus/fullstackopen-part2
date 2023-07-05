import Person from "./Person";

export default function Display({display}) {
  return (
    <>
      <ul>
        {display.map(person => <Person name={person.name} key={person.name} number={person.number} />
        )}
      </ul>
    </>
  );
}