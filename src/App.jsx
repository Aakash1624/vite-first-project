import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  // const [toggle, setToggle] = useState(false);

  // function AdminPanel() {
  //   return (
  //     <>
  //       <h1>Admin Page</h1>
  //     </>
  //   );
  // }

  // function LoginPage() {
  //   return (
  //     <>
  //       <h1>Logged In</h1>
  //     </>
  //   );
  // }

  function increase() {
    setIndex(() => index + 1);

    if (index >= 20) {
      setIndex(20);
    }
  }

  function decrease() {
    setIndex(() => index - 1);

    if (index === 0) {
      setIndex(0);
    }
  }

  function reset() {
    setIndex(0);
  }

  function advIncrease() {
    setIndex(() => index + 5);

    if (index >= 20) {
      setIndex(20);
    }
  }

  function advDecrease() {
    setIndex(() => index - 5);

    if (index === 0) {
      setIndex(0);
    }
  }

  // function toggleClick() {
  //   setToggle((toggle) => (toggle ? false : true));
  // }

  return (
    <>
      <h1>Hello React!!</h1>
      <h1>Count : {index}</h1>
      <button
        style={{
          margin: 10,
          backgroundColor: 'green',
          padding: 10,
          border: 'none',
          color: 'white',
        }}
        onClick={increase}
      >
        Increase
      </button>
      <button
        style={{
          margin: 10,
          backgroundColor: 'red',
          padding: 10,
          border: 'none',
          color: 'white',
        }}
        onClick={decrease}
      >
        Decrease
      </button>
      <button
        style={{
          margin: 10,
          backgroundColor: 'yellow',
          padding: 10,
          color: 'black',
          border: 'none',
        }}
        onClick={reset}
      >
        Reset
      </button>
      <button
        style={{
          margin: 10,
          backgroundColor: 'violet',
          padding: 10,
          border: 'none',
          color: 'white',
        }}
        onClick={advIncrease}
      >
        AdvanceIncrease
      </button>
      <button
        style={{
          margin: 10,
          backgroundColor: 'blue',
          padding: 10,
          border: 'none',
          color: 'white',
        }}
        onClick={advDecrease}
      >
        AdvanceDecrease
      </button>

      {/* <button style={{marginLeft:50}} onClick={toggleClick}>toggle</button>
      {toggle ? <LoginPage /> : <AdminPanel />} */}
    </>
  );
}

export default App;
