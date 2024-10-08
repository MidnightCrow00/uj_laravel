import "../css/Kartya.css";


function Kartya(props){
    function kattintas() {
        console.log(props)
    }
    return(
        <div className="card">
            <h3>{props.obj.cim}</h3>
            <p>{props.obj.leiras}</p>
            <button onClick={()=>{kattintas()}}>Kiválaszt</button>
        </div>
    )
}

export default Kartya;