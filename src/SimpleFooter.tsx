import type { ReactNode } from "react";
import type React from "react";

/**
 * Componente de rodapé simples e personalizável.
 *
 * Exibe o nome do proprietário do site, nome do desenvolvedor,
 * link opcional para o perfil do desenvolvedor, o ano atual (ou customizado)
 * e um ícone opcional ao lado do nome do dev.
 *
 * Ideal para landing pages, sites institucionais e portfólios.
 *
 * @component
 * @example
 * return (
 *   <SimpleFooter
 *     ownerName="Empresa Exemplo"
 *     developerName="Werik Santos"
 *     developerLink="https://github.com/weriksantos"
 *   />
 * )
 */
interface SimpleFooterProps {
  /** Nome do proprietário do site. */
  ownerName: string;

  /** Nome do desenvolvedor. */
  developerName: string;

  /** Link opcional para o portfólio ou perfil do desenvolvedor. */
  developerLink?: string;

  /** Ano a ser exibido no rodapé. Padrão: ano atual. */
  year?: number;

  /** Ícone opcional a ser exibido ao lado do nome do desenvolvedor. */
  icon?: ReactNode;
}

/**
 * Rodapé React moderno e reutilizável.
 */
export const SimpleFooter: React.FC<SimpleFooterProps> = ({
  ownerName,
  developerName,
  developerLink,
  year = new Date().getFullYear(),
  icon = <img className="h-4 w-4 mt-2" src="/public/code-tech.svg" alt="</>" />,
}) => {
  return (
    <footer className="text-white mt-12 flex h-[5rem]">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {year} {ownerName}. Todos os direitos reservados.
        </p>
        <div className="flex justify-center">
          <p className="text-xs mt-2">
            Desenvolvido por{" "}
            {developerLink ? (
              <a
                href={developerLink}
                target="_blank"
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                <strong>{developerName}</strong>
              </a>
            ) : (
              <strong>{developerName}</strong>
            )}
            {icon}
          </p>
        </div>
      </div>
    </footer>
  );
};
