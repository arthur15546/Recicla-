"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Leaf, Building2, TrendingUp, Users, Table } from "lucide-react"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-primary/5 to-background py-20 md:py-32 mb-8 mt-8">
        <div className="container px-8 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Economia Circular em Gravataí</span>
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
              Você sabia que pode transformar seus resíduos em oportunidade?
            </h1>
            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              Acesse centros de reciclagem em Gravataí e incentive a economia circular com benefícios fiscais reais.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/planilha">
                  Ver Centros de Reciclagem
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href="/como-funciona">Como Funciona</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 md:py-24">
        <div className="container px-8 md:px-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-balance text-3xl font-bold md:text-4xl">Por que este site existe?</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              A maioria das pequenas indústrias enfrenta dificuldades em acessar centros de reciclagem, seja pela falta
              de coleta seletiva, limitações logísticas, ou ausência de políticas públicas eficazes. Nosso objetivo é
              mudar esse cenário através da informação e da conexão entre quem produz e quem recicla.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-8 md:px-12">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            <CardHeader className="text-center p-8 md:p-10">
              <CardTitle className="text-3xl md:text-4xl">Benefícios para sua indústria</CardTitle>
              <CardDescription className="text-lg">
                Descubra como a reciclagem pode transformar seu negócio
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50">
                  <CardHeader className="p-6">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Sustentabilidade</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription>
                      Reduza o impacto ambiental do seu negócio e contribua para um futuro mais sustentável.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50">
                  <CardHeader className="p-6">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Economia</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription>
                      Transforme resíduos em receita e aproveite incentivos fiscais disponíveis.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 hover:border-accent/50">
                  <CardHeader className="p-6">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-300 group-hover:bg-accent/20">
                      <Building2 className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>Conformidade</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription>
                      Atenda às regulamentações ambientais e melhore a imagem da sua empresa.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 hover:border-accent/50">
                  <CardHeader className="p-6">
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-300 group-hover:bg-accent/20">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>Comunidade</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription>
                      Apoie cooperativas locais e fortaleça a economia circular em Gravataí.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Law Highlight */}
      <section className="py-16 md:py-24">
        <div className="container px-8 md:px-12">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
            <CardHeader className="p-8 md:p-10">
              <CardTitle className="text-2xl md:text-3xl px-0 md:px-72">
                Aproveite os Incentivos da Lei n° 14.260/2021
              </CardTitle>
              <CardDescription className="text-base px-0 md:px-72">
                A Lei de Incentivo à Reciclagem oferece benefícios reais para empresas e incentivadores
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-8 md:p-10">
              <ul className="text-foreground bg-background rounded-3xl space-y-4 p-8 md:p-10 shadow-sm">
                <li className="flex gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-pretty leading-relaxed">
                    <strong>Dedução no imposto de renda</strong> para incentivadores que apoiam projetos aprovados
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-pretty leading-relaxed">
                    <strong>Estímulo à economia circular:</strong> reutilização, reciclagem e transformação de resíduos
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-pretty leading-relaxed">
                    <strong>Apoio a catadores e cooperativas locais</strong> fortalecendo a comunidade
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-pretty leading-relaxed">
                    <strong>Transparência via portal SINIR</strong> com acompanhamento de resultados
                  </span>
                </li>
              </ul>

              <Button
                asChild
                variant="outline"
                className="gap-2 bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5"
              >
                <a href="https://sinir.gov.br" target="_blank" rel="noopener noreferrer">
                  Acesse o portal SINIR
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section className="rounded-3xl border bg-muted/50 py-16 md:py-24 mb-8">
        <div className="container px-8 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 transition-all duration-300 hover:scale-110 hover:bg-primary/20">
              <Table className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Centros de Reciclagem em Gravataí</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Acesse nossa planilha online com a lista completa e atualizada de centros de reciclagem disponíveis para
              pequenas indústrias em Gravataí.
            </p>
            <Button asChild size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link href="/planilha">
                <Table className="h-4 w-4" />
                Ver Planilha Online
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-8 md:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Vamos transformar resíduos em valor</h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Utilize nosso conteúdo, aproveite os incentivos e contribua com uma Gravataí mais sustentável.
            </p>
            <Button asChild size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link href="/como-funciona">
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
