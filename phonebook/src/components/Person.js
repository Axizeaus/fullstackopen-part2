export default function Person({ name, number, onDelete, onUpdate }) {
  return (
    <>
      <li>{name}</li>
      <li>{number}</li>
      <li><button onClick={onUpdate}>update</button></li>
      <li><button onClick={onDelete}>delete</button></li>
    </>
  );
};
