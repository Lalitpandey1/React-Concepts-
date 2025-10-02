import React, { useEffect, useLayoutEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Message From UseEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  }, []);

  return (
    <div>
      <h2>Test Message in Console</h2>
    </div>
  );
}

export default App;

// this is for useContext

// function App() {
//   return (
//     <div>
//       <Header />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// useState
/*
function App() {
  const [count, setCount] = useState(0);

  const incOne = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={incOne}>+1</button>
      {console.log(count)}
    </>
  );
*/

/*  useEffect 

syntax 
useEffect(()=>{},[dependencies variables])

3 ways we can use
    1st -> no dependency variables -> renders the whole page => The effect runs after every single render cycle of the component.
    2nd -> Empty Dependency => One one time refreshed => The effect runs after every single render cycle of the component.
    3rd -> Only refreshed when dependency changes => The effect runs once after the initial render, and then only again if any of the values in the dependency array have changed since the last render.


    const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
    // cleanup function (optional like clearInterval)
  },[]);
  return (
    <div>
      <h1>I've rendered {count} times</h1>
    </div>
  );
}

useRef
useRef => Helps us to create a mutable variable which does not triggers the re-render of the component
Also used for accessing the DOM elements
 const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>Count : {value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>

      <h1>Refreshed : {count.current}</h1>
    </div>
  );

  // Accessing and Managing DOM Elements
        const inputElem = useRef();

  const btnClicked = () => {
    console.log(inputElem.current.value);
    inputElem.current.style.background = "blue";
  };

  return (
    <div>
      <input type="text" ref={inputElem} />
      <button onClick={btnClicked}> CLick</button>
    </div>
  );
}



useMemo() 
=> the react useMemo Hook returns a memoized value.( it's like  caching a value so that it doesn't need to be recalculated), Only runs when one of it's dependency is updated and helps to improve the performance of the appln similar to useCallback 
only difference is  useMemo returns a callback value and useCallback Hook returns a memoized value

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log(`Calculation Done!`);
    return Math.pow(num, 3);
  }

  const result = useMemo(() => cubeNum(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <h1>Cube of the number : {result}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ++
      </button>
      <h1>Counter : {counter}</h1>
    </div>
  );
}


        #useCallBack


function App() {
  const [count, setCount] = useState(0);

  const newFn = () => {};
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <Header newFn={newFn} />    => this will re-render as many time as many time we will change any state of the component
=> to avoid this we need to wrap the export statement with React.memo(Header) and also change the function

  const newFn = useCallback(()=>{},[count])

    </div>
  );
}

Header
import React from "react";

function Header() {
  console.log("Header Rendered");
  return <div>Header</div>;
}
export default React.memo(Header);



useContext

useContext => Hooks that allow us to access data from any component without explicitly passing it down through props at every level.
OR 
useContext is used to manage the global data in react apps
3 steps to do this 
1. Create a context
2. Providing the Context
3. Consuming the context

step 1 : Create a context
import { createContext } from "react";

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const phone = "+1 1234567890";
  const name = "Lalit";

  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default ContextProvider;

step 2 : Providing the Context
  <ContextProvider>
    <App />
  </ContextProvider>

  Step 3 : Consuming the context
  function Contact() {
  const context = useContext(AppContext);
  return (
    <div>
      <h1>Contact</h1>
      <h2>Name : {context.name}</h2>
      <h2>Phone : {context.phone}</h2>
    </div>
  );
}

export default Contact;


useReducer
useReducer => useReducer is similar to useState but instead of using state and setState it provides state and reducer function

useReducer takes two argument Reducer Function and Initial State 
returns : Current state and Dispatch Method

reducer function : Specifies how the state gets updated

step 1 : Create a initial State

step 2 : Declare the reducer function

function App() {
  // Declaring intial State
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      case "input": {
        return { count: action.payload };
      }
      default: {
        return state;
      }
    }
  };

  const [state, Dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          Dispatch({ type: "increase" });
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          Dispatch({ type: "decrease" });
        }}
      >
        decrease
      </button>
      <br />
      <input
        type="number"
        value={state.count}
        onChange={(e) => {
          Dispatch({ type: "input", payload: e.target.value });
        }}
      />
    </div>
  );
}

export default App;


useLayoutEffect
useLayoutEffect => it's like useEffect except that useLayoutEffect is called before printing or DOM element or (Mounting of DOM element)

useEffect(() => {
    console.log("Message From UseEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  }, []);

  return (
    <div>
      <h2>Test Message in Console</h2>
    </div>
  );
}


`CUSTOM HOOKS

*starts with use

*/
