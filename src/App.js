import "./App.css";
import Header from "./Header";
import Jobs from "./Jobs";
// import Job from "./Job";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header title="📌 The Job Board" />
      <Jobs
        className="job"
        title={[
          "Full Time Sales Associate - Sydney Boutique",
          "Agent de Sécurité - Pantin",
          "Responsable d'Atelier (H/F)",
          "Chef de Projets",
          "Développeur React.js",
          "Sales Associate Stockholm",
          "Vendeur/euse Crans-Montana",
          "CRM & Data Quality Analyst",
          "Infirmier (H/F)",
        ]}
        contractType={[
          "CDI",
          "CDI",
          "CDD",
          "CDD",
          "CDI",
          "CDI",
          "CDI",
          "CDI",
          "CDI",
        ]}
        country={[
          "Australie",
          "France",
          "France",
          "France",
          "France",
          "Suède",
          "Suisse",
          "USA",
          "France",
        ]}
        city={[
          "Sydney",
          "Pantin",
          "Paris",
          "Paris",
          "Paris",
          "Stockholm",
          "Crans-Montana",
          "New-York",
          "Pantin",
        ]}
      />
      <Footer text="Job Board in React by @Manon for Le Réacteur" />
    </div>
  );
}

export default App;
