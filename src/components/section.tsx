import { PropsWithChildren } from "react";

export function Section({ children }: PropsWithChildren) {
  return <section className="py-4">{children}</section>;
}

Section.Title = Title;
Section.Content = Content;

function Title({ children }: PropsWithChildren) {
  return (
    <h2 className="text-2xl font-medium whitespace-nowrap flex items-center after:h-0.5 after:w-full after:bg-gray-300 after:ml-4 mb-2">
      {children}
    </h2>
  );
}

function Content({ children }: PropsWithChildren) {
  return <div className="py-2">{children}</div>;
}
