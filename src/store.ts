import { create } from 'zustand'

type CounterStore = {
    count: number;
    increment: () => void;
    incrementAsync: () => Promise<void>;
    decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => {
        set((state) => ({count: state.count + 1}))
    },
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        set((state) => ({count: state.count + 1}))
    },
    decrement: () => {
        set((state) => ({count: state.count - 1}))
        
    },
}));

type Todo = {
    text: string;
    completed: boolean;
  };
  
  type TodoStore = {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (index: number) => void;
    toggleTodo: (index: number) => void;
  };
  
  export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (text) => set((state) => ({ todos: [...state.todos, { text, completed: false }] })),
    removeTodo: (index) => set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
    toggleTodo: (index) => set((state) => ({
      todos: state.todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo)
    })),
  }));