import {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import './App.css';
import useFetch from "./hooks/useFetch"
import profilesSettings from "./selector/profiles"
import BasicTable from "./components/profiles"
import Pagination from "./components/pagination"
import Loader from "./components/LoadingNow"
 function App() {
  const filters = useSelector(state => state.filters);
  const {data, loading, err} = useFetch("https://api.enye.tech/v1/challenge/records");
  const [datapro, setdatapro] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage, setProfilesPerPage] = useState(5);

  //get current profile
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfile = data ?  data.splice(indexOfFirstProfile, indexOfLastProfile) : "";

  
  return (
    <div className="App">
    <h1>PROFILE DATA</h1>
    {
      !data && (
        <div className="loaderbox" style={{minHeight: "100vh", display: "flex", justifyContent:"center", alignItems:"center"}}>
            <Loader/>
        </div>
      )
    }
     {
      data && (
        <>
         <BasicTable  profiles = {profilesSettings(currentProfile, filters)}/>
         <div className="text-center" style={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"50px"}}>
          <Pagination profilesPerPage={profilesPerPage} totalProfiles={data.length} />
        </div>
       </>
      )
    }
    </div>
  );
}

export default App;
