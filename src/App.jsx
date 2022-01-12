import { render } from '@testing-library/react';
import {useState} from 'react'

const App = () => {
  /* KEDD
  const [shouldShowLanding, setShouldShowLanding] = useState(true);
  
  return (
      <div>
        <div>Hello World</div>
        <div>{shouldShowLanding ? <div>Landing page</div> : <div>Home page</div>}</div>
        <button onClick={() => setShouldShowLanding(!shouldShowLanding)}>Toggle</button>
      </div>
  );*/


/* SZERDA

    const [ pageName, setPageName] = useState("Home");

   
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={(e) => setPageName(e.target.textContent)}>Home</button>
      <button onClick={(e) => setPageName(e.target.textContent)}>About</button>
      <button onClick={(e) => setPageName(e.target.textContent)}>Landing</button>
      <main>
        {pageName === "Home" && <div>Home Page Component</div>}
        {pageName === "About" && <div>About Page Component</div>}
        {pageName === "Landing" && <div>Landing Page Component</div>}
        
        {pageName !== "Landing" && <div>This is not the landing Page Component</div>}
      </main>

    </>
);
*/


const [ inputValue, setInputValue] = useState("");

let isValid = inputValue.length>3;

function rerender(e){
  setInputValue(e.target.value);
}

console.log("render");
console.log(inputValue);

const cars = [
  {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
  {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
  {brand: "Mazda", model: "6", topSpeed: "210km/h"},
  {brand: "Honda", model: "Civic", topSpeed: "200km/h"},
  {brand: "Audi", model: "A4", topSpeed: "220km/h"},
];


return (
<>
  <div>
    <input type="text" onChange={rerender} value={inputValue}/>
  </div>
  <button disabled={!isValid}>Submit</button>
  <h5 style={{visibility: isValid ? 'hidden' : 'visible' }}> Min 3 char!</h5>

<div>My movies:</div>
<ul>
  {cars.map((item) => { 
      /*
    {
      let toMatch = item.brand.match(inputValue);
      let toShow = (toMatch === null ? true : false);

      return <li style={{visibility: toShow ? 'hidden' : 'visible' }}><em>{item.brand}</em>, model: {item.model}, top speed: {item.topSpeed}</li>
      */
       
        if (item.brand.startsWith(inputValue)) {
          return <li>{item.brand} - {item.model}</li>
        }
      })}

  </ul>
</>
);

}

export default App;
