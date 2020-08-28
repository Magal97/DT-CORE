import React, { useEffect, useState } from 'react';
import {useRouteMatch} from 'react-router-dom';
import OkClock from '../../assets/okClock.png'
import PendingClock from '../../assets/pendingClock.png';

import {Container, ProcessData, ProcessName} from './styles';

interface StepsProps {
  uuid: string;
}

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
  links: Links[];
  isDone: boolean;

}


export default function StepsProperties() {
   
    const {params} = useRouteMatch<StepsProps>();

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

    const [step, setStep] = useState<DataInterface>(data);


    useEffect(() => {
    
      const filteredStep = data.(item => item.uuid === params.uuid);
      
      if(filteredStep){
        setStep(filteredStep);
      }else{
        return;
      }


    }, [params.uuid ]);

  return (
    <div className="App">
      <Container>
      <div>
          <ProcessData>{step.initDate}</ProcessData>
          <ProcessName>{step.integrateName}</ProcessName>
      </div>
          {step.isDone ? <img src={OkClock} alt='Process Finished' /> : <img src={PendingClock} alt='Process OnGoing' />}
      </Container>

    </div>
  );
}


