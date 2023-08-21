import { Task, Timestamp } from "../task/task";

export enum RoutineStatus {}

export class Routine {
    constructor(data: Partial<Record<keyof Routine, any>> = {}) {}

    id: any;
    title: string;
    tasks: Task[];

    status: RoutineStatus;
    completionPercent: number;
    timestamps: Timestamp;

}
