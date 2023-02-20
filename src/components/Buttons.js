import PropTypes from 'prop-types';

const Buttons = ({color,text,onclick}) => {
  return (
    <button  style={{backgroundColor:color}} 
    className='btn'
    onClick={onclick}
    >{text}</button>
  );
}


Buttons.defaultProps={
    color:'steelblue',
}

Buttons.propTypes={
    color: PropTypes.string,
    text: PropTypes.string,
    onclick:PropTypes.func,
    
}




export default Buttons;
