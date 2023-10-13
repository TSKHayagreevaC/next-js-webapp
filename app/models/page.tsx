import Card from "../components/card";
import { Header } from "../components/header";
import CardContainer from "../components/cardContainer";

export default function Page() {

    return (
        <div>
            <CardContainer containerHeading="Foundation Models">
                <Card title="Card 1" content="This is the content of Card 1." btnOne="Deploy" btnTwo="Fine Tune" />
                <Card title="Card 2" content="This is the content of Card 2." btnOne="Deploy" btnTwo="Fine Tune" />
            </CardContainer>

            <CardContainer containerHeading="Finetuned Models">
                <Card title="Card 1" content="This is the content of Card 1." btnOne="Eable" btnTwo=""/>
                <Card title="Card 2" content="This is the content of Card 2." btnOne="Enable" btnTwo=""/>
            </CardContainer>

        </div>
    )
  }