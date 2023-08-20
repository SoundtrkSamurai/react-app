// import ListGroup from "./components/ListGroup";
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() {

const [alertVisible, setAlertVisible] = useState(false);

//   let cities = ["New York", "San Francisco", "Dallas", "Paris", "Tokyo"];
//   const handleSelectItem = (item: string) => console.log(item);
//   return <div><ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem}/></div>
  
  return (
    <>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
      <Button color="danger" onClick={() => setAlertVisible(true)}>My Button</Button>
    </>
  )
}

export default App;