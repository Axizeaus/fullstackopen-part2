import Show from "./show";
import axios from "axios";
import { useState } from "react";

export default function ListItem({ item }) {
  const [isShown, setIsShown] = useState(false);
  function handleOnClick() {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/name/" + item)
      .then((resp) => data = resp.data)
      .then(() => console.log(data))
  }

  if (data === null){
    return <Show data={data} />
  }
  return (
    <>
      <li>
        {item} <button onClick={handleOnClick}>show</button>
      </li>
    </>
  );
}
