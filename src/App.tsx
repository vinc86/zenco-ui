import { Button } from "../lib/components/Button";
import { Heading } from "../lib/components/Heading";

function App() {
  return (
    <div>
      <p className="text-red-600">Hello</p>
      <Button label="Update" />
      <Heading className="bg-amber-300">Hello</Heading>
    </div>
  );
}

export default App;
