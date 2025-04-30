import image from '/images/logo.png'
import './main.css';

export default function Main({addHandler}) {
  return (
      
      <div className="home-container">
        <img src={image} alt="" />
        <p style={{fontFamily: 'sans-serif', fontWeight: 'bold', color: 'grey', marginBottom:'0', marginTop:'10px'}}>No Project Selected</p>
        <p style={{fontFamily: 'sans-serif',color:'gray', marginTop:'0px'}}>Select a project or get started with a new one</p>
        <button onClick={addHandler}>Create new project</button>
      </div>

    );
}