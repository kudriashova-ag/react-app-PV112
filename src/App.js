import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter/Counter';
import ToDoList from './components/ToDo/ToDoList';
import Header from './components/Header/Header';
import UserList from './components/Users/UserList';
import UserInfo from './components/Users/UserInfo';
import ThemeProvider from './providers/ThemeProvider';
import Mail from './components/Contacts/Mail';

function App() {

  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/users" element={<UserList />}>
          <Route path=":id" element={<UserInfo />} />
        </Route>

        <Route path="/about-us" element={<Mail />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;