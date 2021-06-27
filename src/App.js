import logo from "./logo.svg";
import "./App.css";
import Card from "../src/components/Card";

function App() {
  return (
    <div className="App">
      <Card
        title="Vidhya Classes"
        name="Ankit Jain"
        onClick={() => {
          window.location.href = "https://www.linkedin.com/in/xdankit/";
        }}
        size="size"
        color="primary-mentor"
        text={`Coding Mentor at Vidhya Classes | Software Engineer II Nuvolo | Ex Senior Software Engineer at LTI (L&T Infotech)`}
      ></Card>
      <Card
        title="Vidhya Classes"
        name="Ankesh Jain"
        onClick={() => {
          window.location.href = "https://www.linkedin.com/in/ankeshjaintkg/";
        }}
        size="size"
        color="primary-mentor"
        text="Data Engineer at INFONET TECHNOLOGIES (INDIA) PRIVATE LIMITED"
      ></Card>
      <Card
        title="Vidhya Classes"
        name="Rahul Pancholi"
        onClick={() => {
          window.location.href = "https://www.linkedin.com/in/rahul2pancholi/";
        }}
        size="size"
        color="primary-mentor"
        text="Software Engineer at Nuvolo"
      ></Card>
      <Card
        title="Vidhya Classes"
        name="Vibhor Pahare"
        onClick={() => {
          window.location.href = "https://www.linkedin.com/in/vibhorpahare/";
        }}
        size="size"
        color="primary-mentor"
        text="Software Engineer at Nuvolo"
      ></Card>
      <Card
        title="Vidhya Classes"
        name="Aman Jain"
        onClick={() => {
          window.location.href =
            "https://www.linkedin.com/in/aman-jain-2a2661131/";
        }}
        size="size"
        color="secondary"
        text="Software Engineer at Capgemini"
      ></Card>
      <Card
        title="Vidhya Classes"
        name="Akash Kushwaha"
        onClick={() => {
          window.location.href =
            "https://www.linkedin.com/in/akash-kushwaha-721058143/";
        }}
        size="size"
        color="secondary"
        text="SDE at Fabric.inc | Learning JavaScript Technologies and Frameworks at Vidhya Classes | ex-TCSer"
      ></Card>
      <Card
        title="Vidhya Classes"
        name="Gautami Pinkyar"
        onClick={() => {
          window.location.href =
            "https://www.linkedin.com/in/gautami-pinkyar-904701110/";
        }}
        size="size"
        color="secondary"
        text="Senior Software Engineer at Accenture"
      ></Card>
      <Card
        title="Vidhya Classes"
        name="Gopi Jagan"
        onClick={() => {
          window.location.href =
            "https://www.linkedin.com/in/gopi-jagan-219713145/";
        }}
        size="size"
        color="secondary"
        text="JavaScript Developer | ReactJs | NodeJs | AngularJs | Full-Stack Engineer Intern at GisterPages"
      ></Card>
    </div>
  );
}

export default App;
