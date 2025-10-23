import Header from "./Components/Header";
import Content from "./Components/Content";

const App = () => {
  const course = "Half Stack application development";

  return (
    <div>
      <Header name={course} />
      <Content />
    </div>
  );
};

export default App;
