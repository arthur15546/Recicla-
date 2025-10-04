"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Clock, Search, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const centros = [
  {
    nome: "Ecoponto Ciprestes",
    endereco: "R. Ciprestes, 180 - Castelo Branco, Gravataí - RS, 94020-470",
    telefone: "+55 51 3600-7044",
    horario: "Segunda a Sábado: 08:00–17:00",
    mapsUrl: "https://maps.google.com/?q=R.+Ciprestes,+180+-+Castelo+Branco,+Gravataí+-+RS,+94020-470",
  },
  {
    nome: "Ecorecicle - Comércio de Metais, Desmonte Industrial e Gestão Ambiental de Resíduos",
    endereco: "R. Amélia Schemes, 270 - Distrito - Águas Mortas, Gravataí - RS, 94100-640",
    telefone: "+55 51 99942-5942",
    horario: "Segunda a Sexta: 07:00–12:00, 13:15–17:00",
    mapsUrl: "https://maps.google.com/?q=R.+Amélia+Schemes,+270+-+Distrito+-+Águas+Mortas,+Gravataí+-+RS,+94100-640",
  },
  {
    nome: "Centro de Coleta Novelis Gravataí",
    endereco: "R. Otávio Schemes, 3725 - Barnabé, Gravataí - RS, 94155-000",
    telefone: "",
    horario: "Segunda a Sábado: 08:00–12:00, 13:00–17:00",
    mapsUrl: "https://maps.google.com/?q=R.+Otávio+Schemes,+3725+-+Barnabé,+Gravataí+-+RS,+94155-000",
  },
  {
    nome: "RM Sucatas",
    endereco: "R. Bento Freitas, 900 - Neópolis, Gravataí - RS, 94100-320",
    telefone: "+55 51 99971-6258",
    horario: "Segunda a Sexta: 08:30–18:00, Sábado: 08:30–12:00",
    mapsUrl: "https://maps.google.com/?q=R.+Bento+Freitas,+900+-+Neópolis,+Gravataí+-+RS,+94100-320",
  },
  {
    nome: "Beto Sucatas - Comércio de Reciclagem",
    endereco: "R. Ibirapuitã, 550 - Salgado Filho, Gravataí - RS, 94025-000",
    telefone: "+55 51 3484-9540",
    horario: "Segunda a Sexta: 08:00–12:00, 13:12–18:00",
    mapsUrl: "https://maps.google.com/?q=R.+Ibirapuitã,+550+-+Salgado+Filho,+Gravataí+-+RS,+94025-000",
  },
]

export default function PlanilhaPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCentros = centros.filter(
    (centro) =>
      centro.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      centro.endereco.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="py-8">
      <div className="container px-8 md:px-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-balance text-4xl font-bold md:text-5xl">Centros de Reciclagem em Gravataí</h1>
          <p className="text-pretty text-lg text-muted-foreground">
            Lista completa e atualizada de centros de reciclagem disponíveis para pequenas indústrias
          </p>
        </div>

        {/* Search */}
        <Card className="mb-8 border-primary/20 transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por nome ou endereço..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 rounded-2xl border-primary/20 focus:border-primary transition-all duration-300"
              />
            </div>
          </CardContent>
        </Card>

        {/* Table View */}
        <div className="space-y-6">
          {filteredCentros.map((centro, index) => (
            <Card
              key={index}
              className="border-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-primary/40"
            >
              <CardHeader className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl mb-2">{centro.nome}</CardTitle>
                    <CardDescription className="text-base">Centro de Reciclagem #{index + 1}</CardDescription>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="shrink-0 gap-2 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5 bg-transparent"
                  >
                    <a href={centro.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Maps
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 md:p-8 pt-0">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Endereço</p>
                      <p className="text-sm leading-relaxed">{centro.endereco}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Telefone</p>
                      <p className="text-sm leading-relaxed">{centro.telefone || "Não informado"}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Horário</p>
                      <p className="text-sm leading-relaxed">{centro.horario}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCentros.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">Nenhum centro encontrado com os termos de busca.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}
