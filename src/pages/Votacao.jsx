import ParticipanteCard from "../components/ParticipanteCard"
import { listarNaRoca,  listarForaDaRoca, registrarVoto, listarParticipantes} from "../services/votacaoService"
import { useState } from "react"

export default function Votacao(){
    const [ultimoVoto, setUltimoVoto] = useState(null)
    const [votosNaSessao, setVotosNaSessao] = useState(0)

    function handelVotar(participante){
        registrarVoto(participante.id)
        setVotosNaSessao(votosNaSessao + 1)
        setUltimoVoto(participante)
    }

    return(
        <div>
            <h1>Quem você vai eliminar?</h1>
            <p>Votos na sessão atual: {votosNaSessao}</p>
            {ultimoVoto !== null ? <p>Voto registrado para eliminar {ultimoVoto.nome}</p> :null}

            <div className="participantes">
            <div className="grade-roca">
                {listarNaRoca().map((p) => {
                return (
                    <ParticipanteCard key={p.id} participante={p} onVotar={handelVotar}/>
                )
            })}
            </div>
            <div className="foraRoca">
                {listarForaDaRoca().map((p) => {
                return (
                    <ParticipanteCard participante={p}/>
                )
            })}
            </div>
        </div>
        </div>
    )
}