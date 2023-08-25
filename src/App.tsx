import { useState, useRef, useEffect } from "react";
import { CanceledError, AxiosError } from "./services/api-client";
import userService, { User } from "./services/user-service";

// import categories from "./expense-tracker/categories";

// import ListGroup from "./components/ListGroup";
// import Alert from './components/Alert';
// import Button from './components/Button';
// import Like from './components/Like';
// import NavBar from './components/NavBar';
// import Carts from './components/Carts';
// import Form from './components/Form';
// import ExpenseList from "./expense-tracker/components/ExpenseList";
// import Expensefilter from "./expense-tracker/components/Expensefilter";
// import ExpenseForm from "./expense-tracker/components/ExpenseForm";

// import { BsFillCalendarFill } from 'react-icons/bs';

import "./App.scss";
import useUsers from "./hooks/useUsers";

function App() {
  // const [alertVisible, setAlertVisible] = useState(false);

  // const [products, setProducts] = useState(['Product 1', 'Product 2']);

  // let cities = ["New York", "San Francisco", "Dallas", "Paris", "Tokyo"];
  // const handleSelectItem = (item: string) => console.log(item);

  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  //   { id: 2, description: "baa", amount: 11, category: "Utilities" },
  //   { id: 3, description: "caa", amount: 12, category: "Utilities" },
  //   { id: 4, description: "daa", amount: 13, category: "Utilities" },
  // ]);
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const visibleExpenses = selectedCategory
  //   ? expenses.filter(
  //       (e) => e.category.toLowerCase() === selectedCategory.toLowerCase()
  //     )
  //   : expenses;

  const { users, setUsers, error, setError, isLoading, setIsLoading } =
    useUsers();

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, []);

  const deleteUser = async (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => user.id !== u.id));

    userService.deleteUser(user.id).catch((error: any) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  const addUser = async () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Big Poppa" };
    setUsers([...users, newUser]);

    userService
      .createUser(newUser)
      .then(({ data }) => setUsers([data, ...users]))
      .catch((error: any) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = async (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.updateUser(updatedUser).catch((error: any) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

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

  // return (
  //   <div>
  //     <div className="mb-5">
  //       <ExpenseForm
  //         onSubmit={(expense) =>
  //           setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
  //         }
  //       />
  //     </div>
  //     <div className="mb-3">
  //       <Expensefilter
  //         onSelectCategory={(category) => setSelectedCategory(category)}
  //       />
  //     </div>
  //     <ExpenseList
  //       expenses={visibleExpenses}
  //       onDelete={(id) =>
  //         setExpenses(expenses.filter((expense) => expense.id !== id))
  //       }
  //     />
  //   </div>
  // );

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => {
                  updateUser(user);
                }}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
