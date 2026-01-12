import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm flex-wrap">
        {/* Accueil */}
        <li className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-1 text-gray-600 hover:text-secondary transition-colors no-underline"
          >
            <Home className="w-4 h-4" />
            <span>Accueil</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </li>

        {/* Items intermédiaires */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-secondary transition-colors no-underline hover:underline"
                  >
                    {item.name}
                  </Link>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
