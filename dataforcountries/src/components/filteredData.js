import ListItem from './listItem'

export default function FilteredList({filteredData, userInput}){

  if (filteredData !== null && filteredData.length > 10 && userInput.length !== 0) {
    return <div>Too many matches</div>;
  }

  if (filteredData !== null &&  filteredData.length === 1) {
    console.log(filteredData);
  }

  if (userInput === ''){
    return;
  }

  console.log(filteredData);
  
  return (
    <ul>
      { userInput !== 0 &&
        filteredData.map(
          item => <ListItem item={item} />
        )
      }
    </ul>
  )
}