import './App.css';

// component is a function
// almost always return something in the function (usually a jsx template)
function App() {
  const title = 'Testing React Project';
  const count = 1;

  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <p>{count}</p>

        <p>{10}</p>
        <p>{ [1,2,3,4]}</p>
        <p>{ 'green' }</p>

        
      </div>
    </div>
  );
}

// export the component (aka 'App')
export default App;
