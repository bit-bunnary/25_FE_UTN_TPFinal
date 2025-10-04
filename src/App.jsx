
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import MessageScreen from "./Screens/MessageScreen/MessageScreen"
import { Route, Routes } from "react-router"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import ContactListContextProvider from "./Context/ContactListContext"
import ContactDetailContextProvider from "./Context/ContactDetailContext"


function App(){
  return(
    <div>
      <ContactListContextProvider>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route element={<ContactDetailContextProvider/>}>
            <Route path="/contact/:id_contact" element={<MessageScreen/>}/>
          </Route>
        </Routes>
      </ContactListContextProvider>
    </div>
  )
}

export default App