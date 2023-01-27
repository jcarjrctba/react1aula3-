function Button(props) {
  return (
    <a href={props.href}>
      <button>{props.button}</button>
    </a>
  );
}

export default Button;
