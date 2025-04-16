import Input from "./components/Inputs/Inputs";
import GNews from "./pages/GNews/GNews";


export default function Home() {
  return (
    <div className="grid grid-cols-2">
      
      <GNews />
      <Input />
      
    </div>
  );
}
