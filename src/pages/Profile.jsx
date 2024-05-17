import { useThemeContext } from "../contexts/ThemeContext";
import { useUserContext } from "../contexts/UserContext";
import { useCounterContext } from "./../contexts/CounterContext";

function Profile() {
  const { username, setUsername } = useUserContext();
  const { theme, setTheme } = useThemeContext();
  const { counter, setCounter } = useCounterContext();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <h2>Profile page</h2>
      <h4> Hello {username} !</h4>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={toggleTheme}>change theme</button>
      <div>
        <button onClick={() => setCounter(counter + 1)}> increment </button>
        <span> {counter} </span>
      </div>
    </div>
  );
}

export default Profile;
