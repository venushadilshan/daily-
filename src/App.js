import logo from './logo.svg';
import './App.css';

function App() {
  var db;
  var request = indexedDB.open("testDb", 1)



  request.onerror = (e) => {
    console.log("error")
  }

  request.onsuccess = (e) => {
  
    db = e.target.result;
    
  }



  return (
    <div >
      
      <button >Add</button>
    </div>
  );
}

export default App;
