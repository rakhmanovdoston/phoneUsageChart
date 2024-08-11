import "./App.css";
import PhoneUsageChart from "./components/PhoneUsageChart";

function App() {
  const phoneUsageData = [
    120, 150, 200, 180, 240, 300, 360, 420, 600, 540, 480, 450, 400, 350, 300,
    200, 100, 50, 80, 120, 160, 200, 240, 180,
  ];

  return (
    <main>
      <h1>My Usage Phone On Seconds</h1>
      <PhoneUsageChart data={phoneUsageData} />
    </main>
  );
}

export default App;
