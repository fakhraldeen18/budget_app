import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Budget App</h1>
      <h3>
        <Link to="budget-app"> To visit our Budget App click me !! </Link>
      </h3>
    </div>
  );
}
