import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Component/NavBar.jsx';
import BreadCrumb from './Component/Breadcreumb.jsx';
import { getImages } from './services/api.jsx';
import Image from './Component/Image.jsx';
import Ia from './Component/Ia.jsx';
import SnackBar from './Component/SnackBar';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('cars');
  const [count, setCount] = useState(10);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    if(count < 3 || count > 200){
         setOpen(true);
    
      return;
    } 
    setOpen(false)

    const getData = async () => {
      await getImages(text, count).then(response => {
     setData(response.data.hits);
      }); 
    }
    getData();
  }, [text, count])
  

  return (
    <div>
  <NavBar />
  <BreadCrumb setText={setText} setCount={setCount}/>
  <Ia data={data}/>
  <SnackBar open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
