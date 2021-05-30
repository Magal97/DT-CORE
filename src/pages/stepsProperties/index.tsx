import React, { useEffect, useState } from 'react';
import {useRouteMatch} from 'react-router-dom';
import OkClock from '../../assets/okClock.png'
import PendingClock from '../../assets/pendingClock.png';
import {useStepContext} from '../../hooks/StepsContext';
import {DataInterface} from '../../dtos/IStepsDTO';

import {Container, ProcessData, ProcessName} from './styles';

interface RouteProps {
  uuid: string;
}


export default function StepsProperties() {
 
  const { getStepsData } = useStepContext();
  const [dataStep, setDataStep] = useState<DataInterface[] | null>(null);
  const {params} = useRouteMatch<RouteProps>();
  
  
  useEffect(() => {
    const filteredStep = getStepsData();
   
    if(filteredStep){
      setDataStep(filteredStep);
    }else{
      setDataStep(null);
    }

  }, [params.uuid]);

  return (
    <>
      {dataStep && dataStep.map((item: DataInterface) => (
         <Container>
            <div>
                <ProcessData>{item.initDate}</ProcessData>
                <ProcessName>{item.integrateName}</ProcessName>
            </div>
              {item.isDone ? <img src={OkClock} alt='Process Finished' /> : <img src={PendingClock} alt='Process OnGoing' />}
        
          
         </Container>
      ))}
    </>
  );
}


