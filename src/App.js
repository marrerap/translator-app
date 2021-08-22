
import './App.css';
import AddressBook from './components/AddressBook';
import FancyText from './components/FancyText';
import LoginForm from './components/LoginForm';
import Pancake from './components/Pancake';
import ShoppingList from './components/ShoppingList';
import Translator from './components/Translator';

function App() {
  return (
    <div className="App">
      <Translator initialText="Cranberry" />
      <LoginForm />
      <FancyText />
      <Pancake />
      <ShoppingList />
      <AddressBook />
      
    </div>
  );
}

export default App;
