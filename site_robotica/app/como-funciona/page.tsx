import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, FileText, TrendingUp, Users, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Como Funciona o Incentivo à Reciclagem | ReciclaIndústria",
  description: "Entenda como participar do programa de incentivo à reciclagem através da Lei n° 14.260/2021.",
}

const steps = [
  {
    number: "01",
    title: "Acesse um centro de reciclagem parceiro",
    description:
      "Consulte nossa lista de centros de reciclagem cadastrados em Gravataí e escolha o mais adequado para o tipo de resíduo da sua indústria.",
    icon: Users,
  },
  {
    number: "02",
    title: "Formalize um projeto ou apoie uma iniciativa",
    description:
      "Você pode criar um projeto próprio de reciclagem ou apoiar iniciativas já cadastradas no sistema SINIR.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Dedução no Imposto de Renda",
    description:
      "Empresas incentivadoras podem deduzir parte do valor investido no imposto de renda, conforme previsto na Lei n° 14.260/2021.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Acompanhe resultados e relatórios",
    description:
      "Monitore a execução do projeto e acesse relatórios públicos através do portal SINIR, garantindo total transparência.",
    icon: CheckCircle2,
  },
]

const benefits = [
  "Redução de custos com descarte de resíduos",
  "Incentivos fiscais através da Lei n° 14.260/2021",
  "Melhoria da imagem corporativa e responsabilidade ambiental",
  "Contribuição para a economia circular local",
  "Apoio a cooperativas e catadores da região",
  "Conformidade com legislação ambiental",
]

export default function ComoFuncionaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="rounded-3xl border bg-gradient-to-b from-primary/5 to-background py-12 md:py-16 mb-8 mt-8">
        <div className="container px-8 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Como Funciona o Incentivo à Reciclagem
            </h1>
            <p className="text-pretty text-lg text-muted-foreground">
              A Lei n° 14.260/2021 permite que empresas incentivem projetos de reciclagem com deduções fiscais. Entenda
              como participar:
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container px-8 md:px-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Passo a passo</h2>
            <p className="text-lg text-muted-foreground">Siga estas etapas para começar a participar do programa</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 hover:border-primary/50"
                >
                  <div className="absolute right-4 top-4 text-6xl font-bold text-primary/5">{step.number}</div>
                  <CardHeader className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="rounded-3xl border bg-muted/50 py-16 md:py-24 mb-8">
        <div className="container px-8 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Benefícios para sua empresa</h2>
              <p className="mb-8 text-pretty leading-relaxed text-muted-foreground">
                Participar do programa de incentivo à reciclagem traz vantagens econômicas, ambientais e sociais para
                sua indústria.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border-primary/20 bg-primary/5 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
              <CardHeader className="p-6">
                <CardTitle className="text-2xl">Lei n° 14.260/2021</CardTitle>
                <CardDescription className="text-base">Lei de Incentivo à Reciclagem</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6 pt-0">
                <p className="text-sm leading-relaxed">
                  A Lei de Incentivo à Reciclagem estabelece mecanismos de fomento à reciclagem no Brasil, permitindo
                  que pessoas físicas e jurídicas deduzam do imposto de renda devido os valores aplicados em projetos
                  aprovados.
                </p>
                <div className="space-y-3">
                  <h3 className="font-semibold">Principais pontos:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Dedução de até 1% do IR devido para pessoas jurídicas</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Apoio a cooperativas e associações de catadores</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Fomento à economia circular e logística reversa</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>Transparência através do portal SINIR</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    asChild
                    variant="outline"
                    className="gap-2 bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary"
                  >
                    <a
                      href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14260.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ler lei completa
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="gap-2 bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary"
                  >
                    <a href="https://sinir.gov.br" target="_blank" rel="noopener noreferrer">
                      Acessar portal SINIR
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-8 md:px-12">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <CardContent className="flex flex-col items-center gap-6 p-10 text-center md:p-12">
              <h2 className="text-balance text-3xl font-bold md:text-4xl">Pronto para começar?</h2>
              <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
                Acesse nossa lista de centros de reciclagem em Gravataí e dê o primeiro passo rumo à sustentabilidade e
                economia circular.
              </p>
              <Button asChild size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Link href="/planilha">
                  Ver Planilha de Centros
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
