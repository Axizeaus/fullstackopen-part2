import Person from "./Person";

export default function Display({display, onUpdate}) {
  return (
    <>
      <ul>
        {display.map(person => <Person name={person.name} key={person.id} number={person.number} onUpdate={onUpdate} />
        )}
      </ul>
    </>
  );
}