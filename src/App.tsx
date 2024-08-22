import { Provider } from 'react-redux';
import store from './store/store';
import MainPage from './components/pages/MainPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CardDetails from './components/pages/CardDetails';
import ErrorPage from './components/pages/ErrorPage';
import './App.css'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/posts" element={<MainPage />} />
          <Route path="/posts/:id" element={<CardDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
