import { Routes, Route, } from "react-router-dom";
import Layout from './layout'
import Edit from './views/edit'
import './App.css';




function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="edit" element={<Edit />} />
      </Route>
    </Routes>
  )
}

export default App;
