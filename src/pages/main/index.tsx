import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OkClock from '../../assets/okClock.png'
import PendingClock from '../../assets/pendingClock.png';
import {useStepContext} from '../../hooks/StepsContext';

import {Container,
ListContainer, LiSquare, ProcessData, ProcessName, ProcessDone,
ProcessOnGoing, PanelContainer, NumberPanel, ProcessType,
LeftSide, RightSide, SquareContainer} from './styles';


function Main() {
   
    const [processCard, setProcessCard] = useState(false);
    const { stepsData, sumDoneProcess, sumOnGoingProcess } = useStepContext();
    
  

    useEffect(() => {
        const onGoingProcess = sumOnGoingProcess();
        const doneProcess = sumDoneProcess();
    
    },[onGoingProcess, doneProcess]);

  return (
      <Container>
        <LeftSide>
            <ListContainer>
            {stepsData.map(item => (
                    <Link onClick={() => {}} to={`/steps/${item.uuid}`}>
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
            {onGoingProcess}
            </NumberPanel>
            <ProcessType color='yellow'>
                Em andamento
            </ProcessType>
            <NumberPanel color='green'>
            {doneProcess}
            </NumberPanel>
            <ProcessType color='green'>
               Finalizado
            </ProcessType>
        </PanelContainer>
        </RightSide>
      </Container>
  );
}

export default Main;
