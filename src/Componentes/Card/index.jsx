export default function Card({dados}){
    return(
        <>
        {
            dados.map((pegaDados, index) =>(

                <div className="skill-card" key={index} style={{background: pegaDados.color}}>
                    <h3>Nivel{pegaDados.titulo}</h3>
                    <p>Nivel{pegaDados.anivel}</p>
                    <p>tempo de xp: {pegaDados.tempoxp}</p>
                    <a href={pegaDados.link}>{pegaDados.textoLink}</a>
                </div>

            ))
        }
        
        
                </>

    
    )
}