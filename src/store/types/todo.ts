export interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
    isImportant: boolean;
    createdAt: string;
    updatedAt?: string;
    startDate?: string;
    dueDate?: string;
    repeat?: 'daily' | 'weekly' | 'none';
}
