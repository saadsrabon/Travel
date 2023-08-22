
import { Provider } from 'react-redux';
import './App.css';
import BookingForm from './components/BookingForm';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
<BookingForm/>

    </Provider>
  );
}

export default App;
