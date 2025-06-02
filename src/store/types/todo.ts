export interface Todo {
    id: number;
    userId: string;
    text: string;
    isCompleted: boolean;
    isImportant: boolean;
    createdAt: string;
    updatedAt?: string;
    startDate?: string;
    dueDate?: string;
    repeat?: 'daily' | 'weekly' | 'none';
}