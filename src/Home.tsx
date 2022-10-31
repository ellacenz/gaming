import {  useState } from "react";
import "./main.css";
import gameOneImg from "./game1.png" ;
import gameTwoImg from "./game2.png";


function Home(){
    const [gameUrl, setGameUrl] = useState("/")
    const handleClickGame1 = () =>{
        setGameUrl("/game/game1")
    }
    const handleClickGame2 = () =>{
        setGameUrl("/game/game2")
        
    }
   

    return(
        <div style={{backgroundColor:'white', height: '600px'}}>
            <div className="cards">
  <div className="card" onClick={handleClickGame1} style={{justifyItems: 'center',  textAlign: 'center'}}>
    <img src={gameOneImg} alt="..." style={{width: '100%', height:'200px'}} />
    <div className="card-body">
      <h2 className="card-title">Game 1</h2>
      <p>
        You can select this text even though the whole card is clickable. <br /> <a href={gameUrl}><button className="button">Play game</button></a>
      </p>
    </div>
  </div>
  
  <div className="card" onClick={handleClickGame2} style={{justifyItems: 'center',  textAlign: 'center'}}>
    <img src={gameTwoImg} alt="..." style={{width: '100%', height:'200px'}} />
    <div className="card-body">
      <h2 className="card-title">Game 2</h2>
      <p >
        You can select this text even though the whole card is clickable. <br /> <a  href={gameUrl}><button className="button">Play game</button></a>
      </p>
    </div>
  </div>
  
</div>

        </div>
    )
}

export default Home;