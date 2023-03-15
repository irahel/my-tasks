import "./style.scss";

function index() {
  const tasks = [
    {
      name: "React",
      time: "02:00:00",
    },
    {
      name: "Js",
      time: "01:00:00",
    },
  ];
  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.name} className="item">
            <h3>{task.name}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default index;
