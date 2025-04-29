import image from '/images/logo.png'
import './main.css';

export default function Main() {
  return (
      <>
      <div className="main-container">
        
      <div className="left-container">
      <h1>YOUR PROJECTS</h1>
      <div className='add-proj'>
      <button>+ Add project</button>
      </div>
      </div>

      <div className="home-container">
        <img src={image} alt="" />
        <p style={{fontFamily: 'sans-serif', fontWeight: 'bold', color: 'grey', marginBottom:'0', marginTop:'10px'}}>No Project Selected</p>
        <p style={{fontFamily: 'sans-serif',color:'gray', marginTop:'0px'}}>Select a project or get started with a new one</p>
        <button style={{backgroundColor: 'rgb(51, 26, 10)', fontSize:'16px', color: 'grey', padding: '12px 20px', borderRadius: '5px', border: 'none'}}>Create new project</button>
      </div>

      </div>
      </>
    );
}