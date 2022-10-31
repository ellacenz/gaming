import { Link } from "react-router-dom";
import './main.css'

function Header(){
    return(
        <div style={{backgroundColor:'gray'}}>
            <ul style={{padding: '0px 10px'}}>
            <li><Link style={{color:'white', textDecoration:'none'}} to='/'>Home</Link></li>
            <li><Link style={{color:'white', textDecoration:'none'}} to='/game/game1'>Game1</Link></li>
            <li><Link style={{color:'white', textDecoration:'none'}} to='/game/game2'>Game2</Link></li>
            <li><Link style={{color:'white', textDecoration:'none'}} to='/apphistory'>History</Link></li>
            </ul>
        </div>
    )
}

export default Header;