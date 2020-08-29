import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OkClock from '../../assets/okClock.png'
import PendingClock from '../../assets/pendingClock.png';
import {useStepContext} from '../../hooks/StepsContext';

import {Container,
ListContainer, LiSquare, ProcessData, ProcessName,
PanelContainer, NumberPanel, ProcessType,
LeftSide, RightSide} from './styles';


function Main() {
   
    const [processCard, setProcessCard] = useState(false);
    const [ onGoingProcess, setOnGoingProcess ] = useState(0);
    const [ doneProcess, setDoneProcess ] = useState(0);
    const { stepsData, sumDoneProcess, sumOnGoingProcess } = useStepContext();
    
    const countGoingProcess = () => {
        const sum = sumOnGoingProcess();
        setOnGoingProcess(sum);
    };

    const countDoneProcess = () => {
        const sum = sumDoneProcess();
        setDoneProcess(sum);
    };

    useEffect(() => {
        countGoingProcess();
        countDoneProcess();
        
    }, [countGoingProcess, countDoneProcess]); 
  

  return (
      <Container>
        <LeftSide>
            <ListContainer>
            {stepsData.map(item => (
                    <Link key={item.uuid} onClick={() => {}} to={`/steps/${item.uuid}`}>
                        <LiSquare selected={processCard} onClick={() => {setProcessCard(true)}}>
                                <div>
                                    <ProcessData>{item.initDate}</ProcessData>
                                    <ProcessName>{item.integrateName}</ProcessName>
                                </div>
                                {item.isDone ? <img src={OkClock} alt='Process Finished' /> : <img src={PendingClock} alt='Process OnGoing' />}
                        </LiSquare>
                    </Link>
                ))}
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
