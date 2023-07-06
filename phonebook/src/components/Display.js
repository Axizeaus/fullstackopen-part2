import Person from "./Person";

export default function Display({display, onUpdate, onDelete}) {
  return (
    <>
      <ul>
        {display.map(
          person => 
            <Person
              name={person.name}
              key={person.id}
              number={person.number}
              onUpdate={() => onUpdate(person.id)}
              onDelete={() => onDelete(person.id)}
            />
          
        )}
      </ul>
    </>
  );
}