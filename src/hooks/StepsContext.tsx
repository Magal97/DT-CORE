import React, { createContext, useCallback, useContext } from 'react';
import {useRouteMatch} from 'react-router-dom';
import { DataInterface, LayersProps, WrapersProps } from '../dtos/IStepContextDTO';

interface StepsContextData{
    sumOnGoingProcess(): number;
    sumDoneProcess(): number;
    stepsData: DataInterface[];
    getLayersData(uuid: string): LayersProps[][];
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
            },
            {
              layer: "LOGGER",
              initDate: "2020/08/27 20:03:01",
              isDone: false,
              wrappers: [
                {
                  wrapperId: 1,
                  initDate: "2020/08/27 20:03:01",
                  isDone: false,
                  steps: [
                    {
                      type: "SAVING",
                      initDate: "2020/08/27 20:03:01",
                      finalDate: "2020/08/27 20:03:20",
                      receivedElements: 1,
                      isDone: true
                    },
                    {
                      type: "NOTIFIER_MERGE",
                      initDate: "2020/08/27 20:03:20",
                      receivedElements: 1,
                      isDone: false
                    }
                  ]
                }
              ]
            }
          ],
          initDate: "2020/08/27 20:02:57",
          integrateName: "Download file",
          links: [
            {
              rel: "self",
              href: "http://packer.visualmix.ml:5051/vm-packer-api/process/21d6069b-fc18-4d47-8d76-350fc7933726"
            }
          ],
          isDone: false
        },
        {
          uuid: "21d6069b-fc18-4d47-8d76-350fc793372z",
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
                      finalDate: "2020/08/27 20:03:00",
                      receivedElements: 1,
                      isDone: true
                    }
                  ]
                }
              ]
            },
            
              {
                layer: "LOGGER",
                initDate: "2020/08/27 20:03:01",
                isDone: false,
                wrappers: [
                  {
                    wrapperId: 1,
                    initDate: "2020/08/27 20:03:01",
                    isDone: false,
                    steps: [
                      {
                        type: "SAVING",
                        initDate: "2020/08/27 20:03:01",
                        finalDate: "2020/08/27 20:03:20",
                        receivedElements: 1,
                        isDone: true
                      },
                      {
                        type: "NOTIFIER_MERGE",
                        initDate: "2020/08/27 20:03:20",
                        receivedElements: 1,
                        isDone: false
                      }
                    ]
                  }
                ]
              },
          ],
          initDate: "2020/08/27 20:02:57",
          integrateName: "Upload file",
          links: [
            {
              rel: "self",
              href: "http://packer.visualmix.ml:5051/vm-packer-api/process/21d6069b-fc18-4d47-8d76-350fc7933726"
            }
          ],
          isDone: false
        },
        {
          uuid: "21d6069b-fc18-4d47-8d76-350fc793372g",
          companyId: 1,
          agentOperator: 1,
          receivedElements: 0,
          layers: [
            {
              layer: "PACKER",
              initDate: "2020/08/27 20:02:58",
              isDone: true,
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
              isDone: true,
              wrappers: [
                {
                  wrapperId: 1,
                  initDate: "2020/08/27 20:02:58",
                  isDone: true,
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
                      finalDate: "2020/08/27 20:03:00",
                      receivedElements: 1,
                      isDone: true
                    }
                  ]
                }
              ]
            },
            {
              layer: "LOGGER",
              initDate: "2020/08/27 20:03:01",
              isDone: true,
              wrappers: [
                {
                  wrapperId: 1,
                  initDate: "2020/08/27 20:03:01",
                  isDone: true,
                  steps: [
                    {
                      type: "SAVING",
                      initDate: "2020/08/27 20:03:01",
                      finalDate: "2020/08/27 20:03:20",
                      receivedElements: 1,
                      isDone: true
                    },
                    {
                      type: "NOTIFIER_MERGE",
                      initDate: "2020/08/27 20:03:20",
                      receivedElements: 1,
                      isDone: true
                    }
                  ]
                }
              ]
            }
          ],
          initDate: "2020/08/27 20:02:57",
          integrateName: "Download Zip",
          links: [
            {
              rel: "self",
              href: "http://packer.visualmix.ml:5051/vm-packer-api/process/21d6069b-fc18-4d47-8d76-350fc7933726"
            }
          ],
          isDone: true
        },
        {
          uuid: "21d6069b-fc18-4d47-8d76-350fc7933729",
          companyId: 1,
          agentOperator: 1,
          receivedElements: 0,
          layers: [
            {
              layer: "PACKER",
              initDate: "2020/08/27 20:02:58",
              isDone: true,
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
              isDone: true,
              wrappers: [
                {
                  wrapperId: 1,
                  initDate: "2020/08/27 20:02:58",
                  isDone: true,
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
                      finalDate: "2020/08/27 20:03:00",
                      receivedElements: 1,
                      isDone: true
                    }
                  ]
                }
              ]
            },
            {
              layer: "LOGGER",
              initDate: "2020/08/27 20:03:01",
              isDone: false,
              wrappers: [
                {
                  wrapperId: 1,
                  initDate: "2020/08/27 20:03:01",
                  isDone: true,
                  steps: [
                    {
                      type: "SAVING",
                      initDate: "2020/08/27 20:03:01",
                      finalDate: "2020/08/27 20:03:20",
                      receivedElements: 1,
                      isDone: false
                    },
                    {
                      type: "NOTIFIER_MERGE",
                      initDate: "2020/08/27 20:03:20",
                      receivedElements: 1,
                      isDone: false
                    }
                  ]
                }
              ]
            }
          ],
          initDate: "2020/08/27 20:02:57",
          integrateName: "Download Doc",
          links: [
            {
              rel: "self",
              href: "http://packer.visualmix.ml:5051/vm-packer-api/process/21d6069b-fc18-4d47-8d76-350fc7933726"
            }
          ],
          isDone: false
        },
      ];

    const sumOnGoingProcess = useCallback(() => {
        const sumProcess = data.filter(process => !process.isDone).length;
        
        return sumProcess;
        
    }, []);

    const sumDoneProcess = useCallback(() => {
        const sumProcess = data.filter(process => process.isDone).length;
        
        return sumProcess;
        
    }, []);

    const getLayersData = useCallback((uuid: string) => {
       const test = data.filter((filter: DataInterface) => filter.uuid === uuid).map((map: DataInterface) => (
         map.layers
       ));
       

       return test;
    }, []);

   

    const value = React.useMemo(
        () => ({ sumOnGoingProcess, sumDoneProcess, getLayersData, stepsData: data }),
        [sumOnGoingProcess, sumDoneProcess, getLayersData, data],
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

