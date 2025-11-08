import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const leadsFilePath = path.join(process.cwd(), "data", "leads.json");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, whatsapp, mensagem, origem } = body;

    if (!nome || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Campos obrigatórios: nome, email, whatsapp" },
        { status: 400 }
      );
    }

    const dataDir = path.dirname(leadsFilePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let leads = [];
    if (fs.existsSync(leadsFilePath)) {
      const fileContent = fs.readFileSync(leadsFilePath, "utf-8");
      leads = JSON.parse(fileContent);
    }

    const newLead = {
      id: Date.now().toString(),
      nome,
      email,
      whatsapp,
      mensagem: mensagem || "",
      origem: origem || "site",
      data: new Date().toISOString(),
      status: "pendente",
    };

    leads.push(newLead);
    fs.writeFileSync(leadsFilePath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    console.error("Erro ao salvar lead:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!fs.existsSync(leadsFilePath)) {
      return NextResponse.json([]);
    }
    const fileContent = fs.readFileSync(leadsFilePath, "utf-8");
    const leads = JSON.parse(fileContent);
    return NextResponse.json(leads);
  } catch (error) {
    console.error("Erro ao ler leads:", error);
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    );
  }
}
