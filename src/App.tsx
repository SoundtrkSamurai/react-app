import { useState } from 'react';

// import ListGroup from "./components/ListGroup";
// import Alert from './components/Alert';
// import Button from './components/Button';
// import ListGroup from './components/ListGroup';
// import Like from './components/Like';
// import NavBar from './components/NavBar';
// import Carts from './components/Carts';
import Form from './components/Form';

// import { BsFillCalendarFill } from 'react-icons/bs';

import './App.scss';

function App() {

  // const [alertVisible, setAlertVisible] = useState(false);
  // const [products, setProducts] = useState(['Product 1', 'Product 2']);
  // let cities = ["New York", "San Francisco", "Dallas", "Paris", "Tokyo"];
  // const handleSelectItem = (item: string) => console.log(item);
  
  // return <div><ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem}/></div>
  
  // return (
  //   <>
  //     {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
  //     <Button color="danger" onClick={() => setAlertVisible(true)}>My Button</Button>
  //   </>
  // )

  // return (
  //   <>
  //     <BsFillCalendarFill color="red" size="40" />
  //   </>
  // );

  // return (
  //   <><Like onClick={() => console.log('Clicked')}/></>
  // )

  // return (
  //   <div>
  //     <NavBar productsCount={products.length} />
  //     <Carts products={products} onClear={() => setProducts([])} />
  //   </div>
  // )

  return (
    <div>
      <Form />
    </div>
  )
}

export default App;