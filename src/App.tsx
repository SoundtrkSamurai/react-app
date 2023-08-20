import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "San Francisco", "Dallas", "Paris", "Tokyo"];

  const handleSelectItem = (item: string) => console.log(item);

  return <div><ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;