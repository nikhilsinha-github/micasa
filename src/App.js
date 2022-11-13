import './App.css';
import { Navbar } from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <div className="home">
//         <header className="App-header">
//           <Navbar/>
//         </header>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react'

export const App = () => {
  return (
    <div className="App">
      <div className="home">
        <header className="App-header">
          <Navbar/>
        </header>
      </div>
    </div>
  )
}
