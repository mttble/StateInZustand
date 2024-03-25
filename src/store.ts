import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type CounterStore = {
    count: number;
    increment: () => void;
    incrementAsync: () => Promise<void>;
    decrement: () => void;
};

export const useCounterStore = create<CounterStore>() (devtools((set) => ({
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
}),{name: 'counter',
enabled: true}));

type Todo = {
    text: string;
    completed: boolean;
};
  
type TodoStore = {
  todos: Todo[];
  currentTodo: string;
  addTodo: () => void;
  removeTodo: (index: number) => void;
  toggleTodo: (index: number) => void;
  setCurrentTodo: (value: string) => void;
};

export const useTodoStore = create<TodoStore>() (devtools((set) => ({
  todos: [],
  currentTodo: '',
  addTodo: () => set((state) => {
    const newTodo = { text: state.currentTodo, completed: false };
    return { todos: [...state.todos, newTodo], currentTodo: '' };
  }),
  removeTodo: (index) => set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
  toggleTodo: (index) => set((state) => ({
    todos: state.todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo)
  })),
  setCurrentTodo: (value) => set(() => ({ currentTodo: value })),
}),{name: 'Todo',
enabled: true}));