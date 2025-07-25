import type { ReactNode } from "react";
import type React from "react";

interface SimpleFooterProps {
  ownerName: string;
  developerName: string;
  developerLink?: string;
  year?: number;
  children?: ReactNode;
}

export const SimpleFooter: React.FC<SimpleFooterProps> = ({
  ownerName,
  developerName,
  developerLink,
  year = new Date().getFullYear(),
  children = <img className="h-4 w-4 mt-2" src="/code-tech.svg" alt="codedev" />,
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
              <a href={developerLink}           
                target="_blank"
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                <strong>{developerName}</strong>
              </a>
            ):(
              <strong>{developerName}</strong>
            )}
          </p>    
          {children}
        </div>        
      </div>
    </footer>
  );
};