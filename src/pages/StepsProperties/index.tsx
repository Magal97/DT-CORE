import React, { useEffect, useState } from 'react';
import {useRouteMatch} from 'react-router-dom';
import OkClock from '../../assets/okClock.png'
import BreakLineImg from '../../assets/breakLine.png'
import PendingClock from '../../assets/pendingClock.png';

import {useStepContext} from '../../hooks/StepsContext';
import {DataInterface, LayersProps, WrapersProps, StepsProps} from '../../dtos/IStepContextDTO';

import {Container, ProcessData, ProcessName, ProcessHeader, BreakLine, Row,
StepContainer, PStep, ListContainer, ProcessDiv,
LayerName} from './styles';

interface RouteProps {
  uuid: string;
}


export default function StepsProperties() {
 
  const { stepsData, getLayersData } = useStepContext();
  const {params} = useRouteMatch<RouteProps>();
  
  const [packerLayers, setPackerLayers] = useState<LayersProps[]>(); 
  const [packerSteps, setPackerSteps] = useState<StepsProps[]>(); 
  
  const [validatorLayers, setValidatorLayers] = useState<LayersProps[]>(); 
  const [validatorSteps, setValidatorSteps] = useState<StepsProps[]>(); 

  const [loggerLayers, setLoggerLayers] = useState<LayersProps[]>(); 
  const [loggerSteps, setLoggerSteps] = useState<StepsProps[]>(); 

  const getLayerData = getLayersData(params.uuid);
  
    const handlePacker = () => {
        const packerLayer = getLayerData[0].filter((filter: LayersProps) => filter.layer === 'PACKER').map((layer: LayersProps) => layer);
        setPackerLayers(packerLayer);
        const getPackerWrapper = packerLayer.map((layer: LayersProps) => layer.wrappers);
        const stepPackerProps = getPackerWrapper[0].map((step: WrapersProps) => step.steps);
        const getPackerStepProps = stepPackerProps[0].map((step: StepsProps) => step);
        setValidatorSteps(getPackerStepProps);
    }

    const handleValidator = () => {
        const validatorLayer = getLayerData[0].filter((filter: LayersProps) => filter.layer === 'VALIDATOR').map((layer: LayersProps) => layer);
        setValidatorLayers(validatorLayer);
        const getValidatorWrapper = validatorLayer.map((layer: LayersProps) => layer.wrappers);
        const stepValidatorProps = getValidatorWrapper[0].map((step: WrapersProps) => step.steps);
        const getValidatorStepProps = stepValidatorProps[0].map((step: StepsProps) => step);
        setPackerSteps(getValidatorStepProps);
    }

    const handleLogger = () => {
        const loggerLayer = getLayerData[0].filter((filter: LayersProps) => filter.layer === 'LOGGER').map((layer: LayersProps) => layer);
        setLoggerLayers(loggerLayer);
        const getLoggerWrapper = loggerLayer.map((layer: LayersProps) => layer.wrappers);
        const stepLoggerProps = getLoggerWrapper[0].map((step: WrapersProps) => step.steps);
        const getLoggerStepProps = stepLoggerProps[0].map((step: StepsProps) => step);
        setLoggerSteps(getLoggerStepProps);
    }


    useEffect(() => {
        handlePacker();
        handleValidator();
        handleLogger();
    
    }, []);

    return (
    <>
        
            <Container>
             
            {stepsData.filter((item: DataInterface) => (item.uuid === params.uuid)).map((itemMap: DataInterface) => (
                <ProcessHeader key={itemMap.uuid}>
                    <div style={{marginRight: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <ProcessData>{itemMap.initDate}</ProcessData>
                        <ProcessName>{itemMap.integrateName}</ProcessName>
                    </div>
                    
                </ProcessHeader>
            ))}
                <ProcessDiv>
                    <LayerName>Packer</LayerName> {packerLayers?.map((maper: LayersProps) => (
                            maper.isDone ? <img src={OkClock} /> : <img src={PendingClock} />
                    ))}
                </ProcessDiv>
                <Row>
                <BreakLine src={BreakLineImg} />
                    <ListContainer>
                        {packerSteps?.map((step: StepsProps) => (
                            <StepContainer key={step.type}>
                                <PStep>
                                   Type: {step.type}
                                </PStep>
                                <PStep>
                                    Initial Date: {step.initDate}
                                </PStep>
                                <PStep>
                                    Final Date: {!!step.finalDate ? step.finalDate : 'In process'}
                                </PStep>
                            </StepContainer>
                        ))}
                    </ListContainer>
                </Row>
               <ProcessDiv>
                   <LayerName>Validator</LayerName> {validatorLayers?.map((maper: LayersProps) => (
                            maper.isDone ? <img src={OkClock} key={maper.layer}/> : <img src={PendingClock} />
                    ))}
               </ProcessDiv>
               <Row>
               <BreakLine src={BreakLineImg} />
                    <ListContainer>
                        {validatorSteps?.map((step: StepsProps) => (
                            <StepContainer key={step.type}>
                                <PStep>
                                   Type: {step.type}
                                </PStep>
                                <PStep>
                                    Initial Date: {step.initDate}
                                </PStep>
                                <PStep>
                                    Final Date: {!!step.finalDate ? step.finalDate : 'In process'}
                                </PStep>
                            </StepContainer>
                        ))}
                    </ListContainer>
                </Row>
                <ProcessDiv>
                   <LayerName>Logger</LayerName> {loggerLayers?.map((maper: LayersProps) => (
                            maper.isDone ? <img src={OkClock} /> : <img src={PendingClock} />
                    ))}
               </ProcessDiv>
               <Row>
               <BreakLine src={BreakLineImg} />
                    <ListContainer>
                        {loggerSteps?.map((step: StepsProps) => (
                            <StepContainer key={step.type}>
                                <PStep>
                                   Type: {step.type}
                                </PStep>
                                <PStep>
                                    Initial Date: {step.initDate}
                                </PStep>
                                <PStep>
                                    Final Date: {!!step.finalDate ? step.finalDate : 'In process'}
                                </PStep>
                            </StepContainer>
                        ))}
                    </ListContainer>
                </Row>
             </Container>
       
      
    </>
  );
}


