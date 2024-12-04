import Button from "./Button.jsx";

const ButtonsWrapper = () => {
  return (
    <div className="buttonsWrapper">
      <Button className="mixinButtonFirst">First Mixin Button</Button>
      <Button className="mixinButtonSecond">Second Mixin Button</Button>
      <Button className="mixinButtonThird">Third Mixin Button</Button>
    </div>
  );
};

export default ButtonsWrapper;
