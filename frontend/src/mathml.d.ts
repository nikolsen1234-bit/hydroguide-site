import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      math: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        xmlns?: string;
        display?: string;
      }, HTMLElement>;
    }
  }
}
