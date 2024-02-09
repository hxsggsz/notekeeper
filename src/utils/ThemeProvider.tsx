import { ThemeProvider as ThemeProviderWrapper } from "next-themes";
import { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProviderWrapper enableSystem={true} attribute="class">
      {children}
    </ThemeProviderWrapper>
  );
};
