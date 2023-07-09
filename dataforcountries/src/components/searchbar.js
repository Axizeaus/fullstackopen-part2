export default function SearchBar({onChange}){
  return (
    <>
      <label htmlFor='search-bar'>find country: </label>
      <input type='text' name="search-bar" onChange={onChange} />
    </>
  )
}