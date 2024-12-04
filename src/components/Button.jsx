const Button = ({ children, className }) => {
  return <button className={`mixinButton ${className}`}>{children}</button>;
};

export default Button;
