import { useState } from "react";
import AccordionItem from "./AccordionItem";

interface Items {
  id: number;
  title: string;
  description: string;
}

interface ItemsArr {
  data: Items[];
}

export default function Accordion({ data }: ItemsArr) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <section className="flex flex-col gap-8">
      {data.map((tab) => (
        <AccordionItem
          key={tab.id}
          title={tab.title}
          id={tab.id}
          description={tab.description}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </section>
  );
}
