import "./App.css";
import Title from "./components/Title";
import Input from "./components/Input";
import Button from "./components/Button";
import Link from "./components/Link";

function App() {
  return (
    <div className="container">
      <div className="box">
        <Title title="Login" />
        <Input label="Usuário" />
        <Input label="Senha" />
        <Button
          button="Login"
          href="https://discord.com/channels/1014299053149929473/1062175752612745266"
        />
        <Link span="Esqueci minha senha" url="https://www.google.com" />
      </div>
    </div>
  );
}

export default App;
