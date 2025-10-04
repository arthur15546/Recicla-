import Link from "next/link"
import { Recycle } from "lucide-react"

export function Footer() {
  return (
    <footer className="mx-auto mt-8 max-w-screen-2xl rounded-3xl border bg-muted/50">
      <div className="container px-8 py-12 md:px-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
              <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-primary">
                <Recycle className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">ReciclaIndústria</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando pequenas indústrias de Gravataí aos centros de reciclagem da região.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/planilha"
                  className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                >
                  Planilha
                </Link>
              </li>
              <li>
                <Link
                  href="/como-funciona"
                  className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                >
                  Como Funciona
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://sinir.gov.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                >
                  Portal SINIR
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14260.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block"
                >
                  Lei n° 14.260/2021
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ReciclaIndústria Gravataí. Promovendo a economia circular.</p>
        </div>
      </div>
    </footer>
  )
}
