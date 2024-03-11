import Tabs from '@components/Tabs';
import Accordion, { AccordionProps } from '@components/Accordion';
import CardMini, { CardProps } from '@components/CardMini';

const tabData = [
  { id: 1, label: 'Tab 1', child: <div>Content for Tab 1</div> },
  { id: 2, label: 'Tab 2', child: <div>Content for Tab 2</div> },
  { id: 3, label: 'Tab 3', child: <div>Content for Tab 3</div> },
];

const accordionData: AccordionProps[] = [
  { id: 1, title: "Accordion 1", children: "Content for Accordion 1" },
  { id: 2, title: "Accordion 2", children: "Content for Accordion 2" },
  // hopefully should be usable
];


const cardData: CardProps[] = [
  { id: 1, name: "Event 1", location: "Location 1", date: "Date 1", time: "Time 1", iconURL: "icon1.png" },
  { id: 2, name: "Event 2", location: "Location 2", date: "Date 2", time: "Time 2", iconURL: "icon2.png" },
];

export default function TabPage() {
  const renderCardMiniComponents = (cardData: CardProps[]) => {
    return cardData.map((cardData) => (
      <CardMini
        id={cardData.id}
        name={cardData.name}
        location={cardData.location}
        date={cardData.date}
        time={cardData.time}
        iconURL={cardData.iconURL}
      />
    ));
  };

  const renderAccordionComponents = (accordionData: AccordionProps[]) => {
    return accordionData.map((accdata) => (
      <Accordion 
      id={accdata.id} 
      title={accdata.title}>
        {renderCardMiniComponents(cardData)}
      </Accordion>
    ));
  };

  return (
    <div>
      <Tabs tabs={tabData} />
      { renderAccordionComponents(accordionData)
      }
    </div>
  );
}// crappy shove one in another just for a showcase
