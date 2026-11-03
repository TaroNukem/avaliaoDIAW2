import "../App.css"
import { obterVotos } from "../services/votacaoService"

export default function ParticipanteCard({ participante, onVotar, className, resultado}){
    const {nome, foto, naRoca} = participante

    return(
        <div className={`Card ${className} ${naRoca && ("card-roca")}`} >
            <img src={foto} alt={nome} />
            <h1>{nome}</h1>
            <hr />
            {className && <h2>Sairia Hoje</h2>}
             {naRoca && <p className="seloRoca">NA ROÇA</p>}
             {resultado && (
                
                <div className="barra">
                    <div style={{ width: `${participante.percentual}%` }}>
                        <p>
                            {participante.percentual.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%<br />
                            <p className="barra-preenchida">{"I".repeat(participante.percentual)}</p> 
                        </p>
                    </div>
                </div>
             )}
             {onVotar && (
                <button className="botao" onClick={()=>onVotar(participante)}>
                    Votar para eliminar
                </button>
             )}
        </div>
    )
}
