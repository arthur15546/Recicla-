import { NextResponse } from "next/server"

export async function GET() {
  // Dados dos centros de reciclagem
  const centros = [
    {
      nome: "Ecoponto Ciprestes",
      endereco: "R. Ciprestes, 180 - Castelo Branco, Gravataí - RS, 94020-470",
      telefone: "+55 51 3600-7044",
      horario: "Segunda a Sábado: 08:00–17:00",
    },
    {
      nome: "Ecorecicle - Comércio de Metais, Desmonte Industrial e Gestão Ambiental de Resíduos",
      endereco: "R. Amélia Schemes, 270 - Distrito - Águas Mortas, Gravataí - RS, 94100-640",
      telefone: "+55 51 99942-5942",
      horario: "Segunda a Sexta: 07:00–12:00, 13:15–17:00",
    },
    {
      nome: "Centro de Coleta Novelis Gravataí",
      endereco: "R. Otávio Schemes, 3725 - Barnabé, Gravataí - RS, 94155-000",
      telefone: "",
      horario: "Segunda a Sábado: 08:00–12:00, 13:00–17:00",
    },
    {
      nome: "RM Sucatas",
      endereco: "R. Bento Freitas, 900 - Neópolis, Gravataí - RS, 94100-320",
      telefone: "+55 51 99971-6258",
      horario: "Segunda a Sexta: 08:30–18:00, Sábado: 08:30–12:00",
    },
    {
      nome: "Beto Sucatas - Comércio de Reciclagem",
      endereco: "R. Ibirapuitã, 550 - Salgado Filho, Gravataí - RS, 94025-000",
      telefone: "+55 51 3484-9540",
      horario: "Segunda a Sexta: 08:00–12:00, 13:12–18:00",
    },
  ]

  // Criar CSV
  const headers = ["Nome", "Endereço", "Telefone", "Horário de Funcionamento"]
  const csvRows = [
    headers.join(","),
    ...centros.map((centro) =>
      [`"${centro.nome}"`, `"${centro.endereco}"`, `"${centro.telefone}"`, `"${centro.horario}"`].join(","),
    ),
  ]

  const csvContent = csvRows.join("\n")

  // Adicionar BOM para suporte UTF-8 no Excel
  const bom = "\uFEFF"
  const csvWithBom = bom + csvContent

  return new NextResponse(csvWithBom, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="centros-reciclagem-gravatai.csv"',
    },
  })
}
