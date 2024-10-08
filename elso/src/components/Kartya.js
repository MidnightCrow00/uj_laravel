import "../css/Kartya.css";


function Kartya(props){
    function kattKez(adat){
        /* Ez a függvény fogja lekezelni a gyerekkomponsenstől kapott infókat. */
        console.log(props.obj)
        props.kattKez(props.obj)
    }
    return(
        <div className="card">
            <h3>{props.obj.cim}</h3>
            <p>{props.obj.leiras}</p>
            <button onClick={()=>{kattKez()}}>Kiválaszt</button>
        </div>
    )
}

export default Kartya;