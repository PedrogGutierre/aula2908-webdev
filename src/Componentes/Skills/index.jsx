import Card from "../Card";

function Skills({ skills }) {

  const Habilidades = [
    {
      titulo: "Node",
      nivel: "noob",
      tempoxp: "1 mes",
      imgCard:"node.jpg",
      color: "blue"
    },
    {
      titulo: "CSS",
      nivel: "master",
      tempoxp: "10 anos",
      color: "red"
    },
    {
      titulo: "Java",
      nivel: "triste",
      tempoxp: "prefiro nao comentar",
      color: "yellow"
    }
  ]
  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados={Habilidades}/>
    </div>
  );
}

export default Skills;