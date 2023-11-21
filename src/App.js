import "./App.css";
import { useUser } from "./UseContext";
import { UserProvider } from "./UseContext";

const LoggedInUser = () => {
  const { user } = useUser();
  return(
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return(
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return(
    <div>
      <h2>Lorem</h2>
      <p>Lorem Ipsum dolor sit amet, consectetur adispiscing elit.</p>
      <p>Written by {user.name}</p>
    </div>
  );
};
function App(){
  return(
    <div className="App">
      <Header/>
      <Page/>
    </div>
  );
}

function Root(){
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Root;