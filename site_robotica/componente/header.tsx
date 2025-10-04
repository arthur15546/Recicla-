import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Recycle } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary transition-all duration-300 hover:shadow-lg">
            <Recycle className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold">ReciclaIndústria Gravataí</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105">
            Início
          </Link>
          <Link
            href="/planilha"
            className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105"
          >
            Planilha
          </Link>
          <Link
            href="/como-funciona"
            className="text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105"
          >
            Como Funciona
          </Link>
        </nav>

        <Button
          variant="outline"
          size="sm"
          className="md:hidden bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary"
        >
          Menu
        </Button>
      </div>
    </header>
  )
}
