import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label htmlFor="first-name">First Name: </label>
        <input id="first-name" type="text" />
        <label htmlFor="last-name">Last Name: </label>
        <input id="last-name" type="text" />
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" />
        <label htmlFor="age">Age: </label>
        <input id="age" type="number" />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" />
        <label htmlFor="confirm-password">Confirm Password: </label>
        <input id="confirm-password" type="password" />

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
