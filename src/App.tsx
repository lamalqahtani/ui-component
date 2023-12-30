import { Tag } from "./ui/Tag";
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
      <Tag text="tag text" />
    </>
  );
};

export default App;
