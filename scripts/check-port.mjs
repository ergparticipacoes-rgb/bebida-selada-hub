import { execSync } from "child_process";

const port = process.env.PORT || 3000;

try {
  execSync(`fuser -k ${port}/tcp`, { stdio: "ignore" });
  console.log(`✅ Porta ${port} liberada automaticamente.`);
} catch {
  console.log(`ℹ️ Nenhum processo ativo na porta ${port}.`);
}
