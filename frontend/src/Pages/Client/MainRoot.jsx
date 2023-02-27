import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Client/Home/Footer/Footer'
import Navbar from '../../Components/Client/Home/Navbar/Navbar'
import DotLoader from "react-spinners/DotLoader";
const MainRoot = () => {
  let override = {
    CSSProperties: {
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      margintOP: "10%"
    }
  }

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {
        loading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "270px" }} > <DotLoader color={"black"} cssOverride={override} loading={loading} size={40} /></div >
        ) : (
          <div>
            {" "}
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        )}
    </>
  )
}

export default MainRoot
