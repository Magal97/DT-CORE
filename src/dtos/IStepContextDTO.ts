export interface LinksProps{
    rel: string;
    href: string;
}
  
export interface StepsProps{
    type: string;
    initDate: string;
    finalDate?: string;
    receivedElements: number;
    isDone: boolean;
}
  
export interface WrapersProps{
    wrapperId: number;
    initDate: string;
    finalDate?: string;
    isDone: boolean;
    steps: StepsProps[];
}
  
export interface LayersProps{
    layer: string;
    isDone: boolean;
    initDate: string;
    wrappers: WrapersProps[];
}
  
export interface DataInterface{
    uuid: string;
    companyId: number;
    agentOperator: number;
    receivedElements: number;
    layers: LayersProps[];
    initDate: string;
    integrateName: string;
    links: LinksProps[];
    isDone: boolean;
  
};

export interface TestInterface{
    uuid: string;
    integrateName: string;
    initDate: string;
    isDone: boolean;
    layers: LayersProps;
}
  