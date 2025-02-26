import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const routes = [
  '/',
  '/table-of-content',
  '/company-overview',
  '/mission-and-vission',
  '/services-and-solutions',
  '/services-and-solutions-2',
  '/our-products',
  '/our-products-2',
  '/legal-informations',
  '/legal-informations-2',
  'contact-informations'
]

interface PageNavigationProps {
  currentPath: string
}

export function PageNavigation({ currentPath }: PageNavigationProps) {
  const currentIndex = routes.indexOf(currentPath)
  const prevPage = currentIndex > 0 ? routes[currentIndex - 1] : null
  const nextPage = currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null

  return (
    <div className="fixed inset-y-0 w-full pointer-events-none print:hidden">
      <div className="flex justify-between items-center h-full max-w-[calc(210mm+16rem)] mx-auto px-8">
        {prevPage && (
          <Link
            href={prevPage}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors pointer-events-auto"
          >
            <ChevronLeft className="w-8 h-8 bg-primary" />
          </Link>
        )}
        {nextPage && (
          <Link
            href={nextPage}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors pointer-events-auto"
          >
            <ChevronRight className="w-8 h-8 bg-primary" />
          </Link>
        )}
      </div>
    </div>
  )
}