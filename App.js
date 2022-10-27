import EmployeeList from "./components/EmployeeList";
import EmployeeContext from "./contexts/EmployeeContext";
import { useContext, createContext } from "react";
import { EmployeeContextProvider } from './contexts/EmployeeContext';



function App() {


  const { employees } = useContext(EmployeeContext)

  return (
    <div className="App">


      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">

            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;

