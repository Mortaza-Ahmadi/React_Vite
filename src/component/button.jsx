import propTypes from "prop-types";

export  function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>
  
}
 Button.propTypes = {
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
 };
