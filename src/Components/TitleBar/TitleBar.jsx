import './TitleBar.css'

const TitleBar = (props) => {
    return (
        <div className="nav-container">
            <div className='nav-bar1'>
                 <h3 className='nav-title'style={{padding: '1em'}}>Music <small className='nav-sub'>Library</small></h3>
            </div>
        </div>
      );
}
 
export default TitleBar;