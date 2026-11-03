import ParticipanteCard from "../components/ParticipanteCard";
import {
  calcularResultado,
  calcularTotalVotos,
  obterVotos,
  zerarVotos,
} from "../services/votacaoService";
import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "../App.css"

export default function Resultado() {
  const [votos, setVotos] = useState(() => obterVotos());

  const total = calcularTotalVotos(votos);
  const resultado = calcularResultado(votos);

 function handleZerar(){
    if(window.confirm('Apagar todos os votos?')){
        zerarVotos()
        setVotos({})
    }
 }

  return (
    <div>
<button onClick={handleZerar} className="botao">
    Zerar votação
</button>
      {total === 0 ? (
        <div>
        <p>Nenhum voto</p>
        <Link to="/votacao">
            <button className="botao">Ir votar</button>
        </Link>
</div>
      ) : (
        <div className="grade-roca">
          {resultado.map((p, index) => {
            return (
              <ParticipanteCard
                participante={p}
                className={index === 0 ? "placar-lider" : null}
                resultado={"roca"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
