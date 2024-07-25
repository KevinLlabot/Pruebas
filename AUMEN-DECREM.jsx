import { useState , useEffect } from 'react';


function App() {
const [clicks, setClicks] = useState(0)

  
 const aumentar = () => {
 setClicks(clicks+1)
 }
 const restar = () => {
  setClicks(clicks-1)
 }
  return (
    <>
    <button style={{width: 100 , height: 100, fontSize: 70 , display:'flex', justifyContent:"center"}}>{clicks}</button> <br /> <br />
    <button onClick={aumentar}>Incrementar</button>
    <button onClick={restar}>Decrementar</button>
    </>
  );
}

export default App;