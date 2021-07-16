import "../styles.css";
import CSBanner from "./Banner";
import OurStory from "./OurStory";
import OurClient from "./OurClients";
export default function App() {
  return (
    <div className="App">
      <CSBanner />
      <OurStory />
      <OurClient />
    </div>
  );
}
