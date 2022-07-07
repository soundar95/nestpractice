export interface task{
    id:string;
    title:string;
    description:string;
    status:taskStatus;
}
export enum taskStatus{
    OPEN='OPEN',
    CLOSED='CLOSED',
    PROGRESS='IN-PROGRESS',
}