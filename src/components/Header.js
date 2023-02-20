import PropTypes from 'prop-types';
import Buttons from './Buttons';





const Header = ({title,onAdd,checkTask}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Buttons color={!checkTask ? 'green' : 'red'} text={!checkTask ? 'Add' : 'Close'} onclick={onAdd}/>
      
      

      </header>
  );
}

// const styling={
//     color:'red',
//     backgroundColor:'black'
// }

Header.defaultProps={
    title:'default props',
}
Header.propTypes={
    title:PropTypes.string,
}

export default Header
 