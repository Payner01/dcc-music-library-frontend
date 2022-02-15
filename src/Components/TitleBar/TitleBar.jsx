import './TitleBar.css'

const TitleBar = (props) => {
    return (
        <div className="nav-container">
            <div className='nav-bar1'>
                 <h3 style={{padding: '1em'}}>Music <small className='text-muted'>Library</small></h3>
            </div>
        </div>
      );
}
 
export default TitleBar;