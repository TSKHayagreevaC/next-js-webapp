'use client'

import CardContainer from './components/cardContainer';
import Card from './components/card';
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  const isAuthenticated = (): boolean => localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated()) {
    router.push('/login');
    return;
  } 
  return (
    <div>
      <CardContainer containerHeading="Dashboard">
        <Card title="Item_1" content="This is the content of Item 1." btnOne="" btnTwo="" />
        <Card title="Item_2" content="This is the content of Item 2." btnOne="" btnTwo="" />
      </CardContainer>
    </div>
  )
}
