import './App.css'

export default function JokeCard(props){
    return(
        <div className="column" style={{backgroundcolor:"#aaa"}}>
        <h2>{props.title}</h2>
        <p>{props.joke}</p>
      </div>
    )
}