import ListItem from './listItem'
import Results from './results';

export default function FilteredList({filteredData, userInput, countries}){

  if (filteredData !== null && filteredData.length > 10 && userInput.length !== 0) {
    return <div>Too many matches</div>;
  }

  if (filteredData !== null &&  filteredData.length === 1 && userInput !== 0) {
    let result = countries.find(country => country.name.common === filteredData[0]);
    console.log(result);
    return <Results result={{result}}/>
  }

  if (userInput === ''){
    return;
  }
  
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