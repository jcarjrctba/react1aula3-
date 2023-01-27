function Link(props) {
  return (
    <a href={props.url}>
      <span>{props.span}</span>
    </a>
  );
}

export default Link;
