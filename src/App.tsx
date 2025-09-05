import { Button } from "../lib/components/Button";
import { Heading } from "../lib/components/Heading";
import { Spinner } from "../lib/components/Spinner/";

function App() {
  return (
    <div>
      <p className="text-red-600">Hello</p>
      <Button color="red" design="outline" isLoading>
        Click me
      </Button>
      <Heading className="bg-amber-300">Hello</Heading>
      <Spinner />
    </div>
  );
}

export default App;
