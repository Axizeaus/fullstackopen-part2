export default function Show({ data }) {
  let languages = [];
  for (let [key, value] of Object.entries(data.languages)) {
    languages.push(value);
  }
  return (
    <>
      <h1>{data.name.common}</h1>

      <p>capital : {data.capital[0]}</p>
      <p>area : {data.area} </p>

      <h3>languages</h3>

      <ul>
        {languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>

      <img src={data.flags.png} alt="flag" />
    </>
  );
}
