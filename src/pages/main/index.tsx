import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OkClock from '../../assets/okClock.png'
import PendingClock from '../../assets/pendingClock.png';

import {Container,
ListContainer, LiSquare, ProcessData, ProcessName, ProcessDone,
ProcessOnGoing, PanelContainer, NumberPanel, ProcessType,
LeftSide, RightSide, SquareContainer} from './styles';


interface Links{
    rel: string;
    href: string;
}

interface DataInterface {
    uuid: string;
    companyId: number;
    agentOperator: number;
    receivedElements: number;
    initDate: Date;
    contentLength: number;
    integrateName: string;
    contentLengthHuman: string;
    links: Links;
    isDone: boolean;

  }


function App() {
   
    const [processCard, setProcessCard] = useState(false);

    const data = [
        {
            uuid: "65599061-1c50-4af8-ab60-2622e9189e9g",
            companyId: 1,
            agentOperator: 1,
            receivedElements: 0,
            initDate: "2020/08/26 09:46:08",
            contentLength: 246,
            integrateName: "Barcode",
            contentLengthHuman: "246 bytes",
            links: [
            {
            rel: "process",
            href: "http://localhost:5051/vm-packer-api/process/65599061-1c50-4af8-ab60-2622e9189e9f",
            }
            ],
            isDone: false,
        },
        {
            uuid: "65599061-1c50-4af8-ab60-2622e9189e92",
            companyId: 2,
            agentOperator: 1,
            receivedElements: 0,
            initDate: "2020/08/26 09:46:08",
            contentLength: 246,
            integrateName: "CodeBar",
            contentLengthHuman: "246 bytes",
            links: [
            {
            rel: "process",
            href: "http://localhost:5051/vm-packer-api/process/65599061-1c50-4af8-ab60-2622e9189e9f",
            }
            ],
            isDone: true,
        },
        {
            uuid: "65599061-1c50-4af8-ab60-2622e9189e9b",
            companyId: 2,
            agentOperator: 1,
            receivedElements: 0,
            initDate: "2020/08/26 09:46:08",
            contentLength: 246,
            integrateName: "Barcode",
            contentLengthHuman: "246 bytes",
            links: [
            {
            rel: "process",
            href: "http://localhost:5051/vm-packer-api/process/65599061-1c50-4af8-ab60-2622e9189e9f",
            }
            ],
            isDone: true,
        },

    ];

    const sumOnGoingProcess = data.filter(process => !process.isDone).length;
    const sumDoneProcess = data.filter(process => process.isDone).length;
    
    


  return (
    <div className="App">
      <Container>
          <LeftSide>
       

        <ListContainer>
           {data.map(item => (
                <Link to={`/steps/${item.uuid}`}>
                    <LiSquare selected={processCard} onClick={() => {setProcessCard(true)}} key={item.uuid}>
                            <div>
                                <ProcessData>{item.initDate}</ProcessData>
                                <ProcessName>{item.integrateName}</ProcessName>
                            </div>
                            {item.isDone ? <img src={OkClock} alt='Process Finished' /> : <img src={PendingClock} alt='Process OnGoing' />}
                    </LiSquare>
                </Link>
            ))};
        </ListContainer>
        </LeftSide>
        <RightSide>
        <PanelContainer>
            <NumberPanel color='yellow'>
            {sumOnGoingProcess}
            </NumberPanel>
            <ProcessType color='yellow'>
                Em andamento
            </ProcessType>
            <NumberPanel color='green'>
            {sumDoneProcess}
            </NumberPanel>
            <ProcessType color='green'>
               Finalizado
            </ProcessType>
        </PanelContainer>
        </RightSide>
      </Container>



    </div>
  );
}

export default App;
