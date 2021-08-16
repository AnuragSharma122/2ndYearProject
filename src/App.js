import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';


function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* SideBar */}
      <Feed />
      {/* Feed */}
      <div class="widgets">
      <Widgets />
      </div>
      {/* Widgets */}
    </div>
  );
}

export default App;
