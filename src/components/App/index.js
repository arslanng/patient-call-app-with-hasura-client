import { Route, Routes } from "react-router-dom";
import Nurse from "../../pages/Nurse";
import Patient from "../../pages/Patient";
import styles from "./styles.module.css";
import Doctor from "../../pages/Doctor";
import Footer from "../Footer";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/patient" element={<Patient />} />
        <Route path="/" element={<Nurse />} />
        <Route path="/doctor/:company" element={<Doctor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
