const Header = (props) => {
  const totalSum = props.valuesArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <>
      <p>Number of exercises: {totalSum}</p>
    </>
  );
};

export default Header;
