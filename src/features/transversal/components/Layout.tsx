import { Header, Spinner, Wrapper } from "@/shared/components";
import { ReactNode } from "react";

interface LayoutProps {
  title?: string;
  children: ReactNode;
  isLoading?: boolean;
  notFound?: boolean;
  className?: string;
  wrapper?: boolean;
}

export const Layout = ({
  children,
  title,
  isLoading,
  className,
  wrapper = true,
}: LayoutProps) => {
  return (
    <div className={`min-h-screen bg-gray-100`}>
      <Header />
      <div className={`py-4 ${className}`}>
        {isLoading ? (
          <div className="py-5">
            <Spinner className="mx-auto" />
          </div>
        ) : wrapper ? (
          <Wrapper>{children}</Wrapper>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
