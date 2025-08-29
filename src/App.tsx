import { Button } from "./stories/Button/Button";
import Title from "./stories/Headings/Title";

function App() {
  return (
    <div>
      <p className="text-red-600">Hello</p>
      <Button label="Update" />
      <Title className=" bg-amber-300">Hello</Title>
    </div>
  );
}

export default App;
