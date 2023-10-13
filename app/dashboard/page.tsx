'use client'

import CardContainer from '../components/cardContainer';
import Card from '../components/card';
import GraphLayout from '../components/graphLayout';


export default function Home() {
  
  return (
    <div>
      <CardContainer containerHeading="Dashboard">
        <Card title="Item_1" content="This is the content of Item 1." btnOne="" btnTwo="" />
        <Card title="Item_2" content="This is the content of Item 2." btnOne="" btnTwo="" />
        <GraphLayout children={undefined} />
      </CardContainer>
    </div>
  )
}
