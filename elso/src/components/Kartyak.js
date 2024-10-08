import Kartya from "./Kartya";

export default function Kartyak(props){
    function kattKez(adat){
        /* Ez a függvény fogja lekezelni a gyerekkomponsenstől kapott infókat. */
        console.log(adat)
        props.kattKez(adat)
      }
    return(
        <>
         {props.lista.map((elem, index) => {
            return <Kartya obj={elem} key={index} kattKez={kattKez}/>;
          })}
        </>
    )
}