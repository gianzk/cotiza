import React, { useState, useEffect, useContext } from "react";
import Header from "./../../layouts/header";
import { Main } from "./style";
import Quotes from "./../../component/Quotes/index";
import TrackList from "../../component/tracklist/index";
import { getUser } from "./../../services/index";
import { DataSesion } from "./../../context/DataSesion";

const PlanPage = () => {
  /* const [load, setLoad] = useState(false);
  const { sesion, setSesion } = useContext(DataSesion);

  useEffect(() => {
    if (!load) {
      getUser()
        .then((e) => {
          setSesion(e.data);
          setLoad(true);
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(sesion);
    }
  }, []);
*/
  return (
    <>
      <Header></Header>
      <Main>
        <TrackList></TrackList>
        <Quotes></Quotes>
      </Main>
    </>
  );
};

export default PlanPage;
