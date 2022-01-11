import {useState} from 'react'

let shouldShowLanding = true;

const toggle = () => {
  shouldShowLanding = !shouldShowLanding;
  console.log(shouldShowLanding);
  
}

const Content = () => {
  let result;
  
  if (shouldShowLanding) {
    result = <div>Landing page</div>
  } else {
    result = <div>Home page</div>
  }

  return result;
}

const App = () => {

  /*const [text, setText] = useState("Landing page");*/
  

  return (
      <div>
        <div>Hello World</div>
        <div><Content /></div>
        <button onClick={toggle}>Toggle</button>
      </div>
  );
}

export default App;
