import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter/Counter';
import ToDoList from './components/ToDo/ToDoList';
import Header from './components/Header/Header';
import UserList from './components/Users/UserList';
import UserInfo from './components/Users/UserInfo';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/users" element={<UserList />}>
          <Route path=":id" element={<UserInfo />} />
        </Route>

        <Route path="/about-us" element={<h1>About Us</h1>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;