import { Button } from "./ui/Button";
import Icon from "@mui/material/Icon";

const App = () => {
  return (
    <>
      <Button
        icon={<Icon>star</Icon>}
        text="Greetings"
        onClick={() => alert("hi")}
        btnStyle="secondary"
        title="title"
      />
    </>
  );
};

export default App;
