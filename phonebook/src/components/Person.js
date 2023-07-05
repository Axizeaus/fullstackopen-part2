export default function Person({ name, number, onUpdate }) {
  return (
    <>
      <li>{name}</li>
      <li>{number}</li>
      <li><button onClick={onUpdate}>update</button></li>
    </>
  );
};
