export enum TaskStatus {}

export interface Timestamp {
    created: number | null;
    updated: number | null;
    completed: number | null;
}

export const TASK_ID = Symbol('task creation');

export class Task {

    static create(data = {}) {
        
    }


    id: any;
    description: string;
    status: TaskStatus;

    timestamps: Timestamp
    construcor(data: Record<keyof Task, any>, command: symbol) {
        if (!command) {
            throw new Error('task should be invoked via static method');
        }
        this.id = data.id;
        this.description = data.description;
        this.status = data.status;
        this.timestamps = this.parseTimeStamps(data.timestamps);

    }




    private parseTimeStamps(timestamps: Partial<Timestamp> | null): Timestamp {
        const defaultTimstamps: Timestamp = {
            created: null,
            updated: null,
            completed: null,
        };

        return Object.assign(defaultTimstamps, timestamps);
    }
}
