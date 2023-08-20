import Troll from "./imgs/Troll_Face.png"

export default function Header (){
   
   return ( 
   <section>
        <div className="title">
            <img src={Troll}/>
            <h1>Meme Generator</h1>
        </div>
        <h3>React Course - Project 3</h3>
    </section>
)
}