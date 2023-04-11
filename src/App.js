import './App.css';
const tg = window.Telegram.WebbApp

function App() {

  userEffect(() => {
    tg.ready()
  }, [])

  const onClose = () =>{
    tg.close
  }

  return (
    <div className="App">
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
