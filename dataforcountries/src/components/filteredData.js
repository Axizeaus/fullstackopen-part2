import ListItem from './listItem'

export default function FilteredList({filteredData}){
  if (filteredData === null) {
    return <></>;
  }
  // if (filteredData.length > 10){
  //   console.log('too many matches, be more specific');
  //   return;
  // }
  
  return (
    <ul>
      {
        filteredData.map(
          country => <ListItem item={country} />
        )
      }
    </ul>
  )
}