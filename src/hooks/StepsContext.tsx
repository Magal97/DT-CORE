import React, { createContext, useCallback, useContext } from 'react';
import {useRouteMatch} from 'react-router-dom';
import { DataInterface } from '../dtos/IStepsDTO';

interface StepsContextData{
    sumOnGoingProcess(): number;
    sumDoneProcess(): number;
    getStepsData(): DataInterface[] | null; 
    stepsData: DataInterface[];
}

interface RouteProps {
  uuid: string;
}


const StepContext = createContext<StepsContextData | null>(null);

const StepContextProvider: React.FC = ({children}) => {
    
  const {params} = useRouteMatch<RouteProps>();
  
    const data: DataInterface[] = [
        {
          uuid: "21d6069b-fc18-4d47-8d76-350fc7933726",
          companyId: 1,
          agentOperator: 1,
          receivedElements: 0,
          layers: [
            {
              layer: "PACKER",
              initDate: "2020/08/27 20:02:58",
              isDone: false,
              wrappers: [
                {
                  wrapperId: 1,
                  initDate: "2020/08/27 20:02:58",
                  finalDate: "2020/08/27 20:02:59",
                  isDone: true,
                  steps: [
                    {
                      type: "PACKING",
                      initDate: "2020/08/27 20:02:58",
                      finalDate: "2020/08/27 20:02:58",
                      receivedElements: 1,
                      isDone: true
                    },
                    {
                      type: "SENDING_MOM",
                      initDate: "2020/08/27 20:02:59",
                      finalDate: "2020/08/27 20:02:59",
                      receivedElements: 1,
                      isDone: true
                    }
                  ]
                }
              ]
            },
            {
              layer: "VALIDATOR",
              initDate: "2020/08/27 20:02:58",
              isDone: false,
              wrappers: [
                {
                  wrapperId: 1,
                  initDate: "2020/08/27 20:02:58",
                  isDone: false,
                  steps: [
                    {
                      type: "VALIDATING",
                      initDate: "2020/08/27 20:02:59",
                      finalDate: "2020/08/27 20:03:00",
                      receivedElements: 1,
                      isDone: true
                    },
                    {
                      type: "SENDING_MOM",
                      initDate: "2020/08/27 20:03:00",
                      receivedElements: 1,
                      isDone: true
                    }
                  ]
                }
              ]
            }
          ],
          initDate: "2020/08/27 20:02:57",
          integrateName: "LogicalMarket",
          links: [
            {
              rel: "self",
              href: "http://packer.visualmix.ml:5051/vm-packer-api/process/21d6069b-fc18-4d47-8d76-350fc7933726"
            }
          ],
          isDone: false
        }
      ];

    const sumOnGoingProcess = useCallback(() => {
        const sumProcess = data.filter(process => !process.isDone).length;
        
        return sumProcess;
        
    }, []);

    const sumDoneProcess = useCallback(() => {
        const sumProcess = data.filter(process => process.isDone).length;
        
        return sumProcess;
        
    }, []);

    const getStepsData = useCallback(() => {
        
        const dataSteps = data.find((item: DataInterface) => (item.uuid === params.uuid));
       
        if(dataSteps){
            return dataSteps;
        }else{
          return null;
        }
        
    }, []);

    const value = React.useMemo(
        () => ({ sumOnGoingProcess, sumDoneProcess, getStepsData, stepsData: data }),
        [sumOnGoingProcess, sumDoneProcess, getStepsData, data],
      );

    return(
        <StepContext.Provider value={value}>
            {children}
        </StepContext.Provider>
    );
};


function useStepContext(): StepsContextData {
    const context = useContext(StepContext);
  
    if (!context) {
      throw new Error(`useStepContext must be used within a StepContextProvider`);
    }
  
    return context;

}

export { StepContextProvider, useStepContext };

