
const Button = ({ onClick, type = 'submit', children }) => {
  return (
    <button onClick={onClick} type={type} >
      {children}
    </button>
  );
};

export default Button;