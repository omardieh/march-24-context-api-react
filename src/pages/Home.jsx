import { useUserContext } from "../contexts/UserContext";
import { useCounterContext } from "../contexts/CounterContext";

function Home() {
  const { username } = useUserContext();
  const { counter } = useCounterContext();
  return (
    <div>
      <h2>Homepage</h2>
      <p> Hello {username || "guest"} </p>
      <h2> count is : {counter} </h2>
    </div>
  );
}

export default Home;
