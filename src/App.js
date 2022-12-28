import { Provider } from "react-redux";
import CardContainer from "./components/container/CardContainer";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";
import store from "./components/redux/store";



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header/>
     
      <CardContainer/>
      <Modal/>
    </div>
    </Provider>
  );
}

export default App;
