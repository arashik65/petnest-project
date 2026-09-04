// "use client";
// import { ThemeProvider } from "next-themes";

// const NestThemeProvider = ({children}) => {
//   return (
//     <ThemeProvider attribute="class" defaultTheme="light">
//       {children}
//     </ThemeProvider>
//   );
// };

// export default NestThemeProvider;


// "use client";

// import { ThemeProvider } from "next-themes";

// const NestThemeProvider = ({ children }) => {
//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="light"
//       enableSystem={false}
//     >
//       {children}
//     </ThemeProvider>
//   );
// };

// export default NestThemeProvider;



"use client";

import { ThemeProvider } from "next-themes";

export default function NestThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}