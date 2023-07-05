import "./App.css"

function SquareComponent(props){
  const classes = props.className ? `${props.className} square` : 'square';
  return (
    <span className = {classes + (props.state === 'X' ? ` x-color` : ` o-color`)} 
          onClick={() => props.onClick(props.index)}>
        {props.state}
    </span>
  );
}

export default SquareComponent;
