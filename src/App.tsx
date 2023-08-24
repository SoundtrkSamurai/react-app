import { useState } from "react";

import categories from "./expense-tracker/categories";

// import ListGroup from "./components/ListGroup";
// import Alert from './components/Alert';
// import Button from './components/Button';
// import ListGroup from './components/ListGroup';
// import Like from './components/Like';
// import NavBar from './components/NavBar';
// import Carts from './components/Carts';
// import Form from './components/Form';
import ExpenseList from "./expense-tracker/components/ExpenseList";
import Expensefilter from "./expense-tracker/components/Expensefilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

// import { BsFillCalendarFill } from 'react-icons/bs';

import "./App.scss";

function App() {
  // const [alertVisible, setAlertVisible] = useState(false);

  // const [products, setProducts] = useState(['Product 1', 'Product 2']);

  // let cities = ["New York", "San Francisco", "Dallas", "Paris", "Tokyo"];
  // const handleSelectItem = (item: string) => console.log(item);

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "baa", amount: 11, category: "Utilities" },
    { id: 3, description: "caa", amount: 12, category: "Utilities" },
    { id: 4, description: "daa", amount: 13, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter(
        (e) => e.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : expenses;

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

  // return (
  //   <div>
  //     <Form />
  //   </div>
  // )

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <Expensefilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
