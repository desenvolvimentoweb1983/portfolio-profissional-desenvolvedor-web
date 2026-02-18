// components/OSPopularityTable/OSPopularityTable.jsx
import "./OSPopularityTable.css";

function OSPopularityTable() {
  const osData = [
    { sistema: "Android", popularidade: 44.4, nota: "Líder global (móvel + dispositivos)" },
    { sistema: "Windows", popularidade: 27.0, nota: "Dominante em desktops" },
    { sistema: "iOS", popularidade: 17.0, nota: "Forte no mobile premium" },
    { sistema: "macOS", popularidade: 6.0, nota: "Uso em desktops/laptops Apple" },
    { sistema: "Linux", popularidade: 4.5, nota: "Nicho de desenvolvedores/servidores" },
    { sistema: "ChromeOS", popularidade: 1.8, nota: "Chromebooks/educação" },
  ];

  return (
    <section className="os-table">
      <h2>Participação dos Sistemas Operacionais</h2>
      <table>
        <thead>
          <tr>
            <th>Sistema</th>
            <th>Participação (%)</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          {osData.map((os, idx) => (
            <tr key={idx}>
              <td>{os.sistema}</td>
              <td>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${os.popularidade}%` }}
                  ></div>
                  <span className="progress-label">{os.popularidade}%</span>
                </div>
              </td>
              <td>{os.nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default OSPopularityTable;
