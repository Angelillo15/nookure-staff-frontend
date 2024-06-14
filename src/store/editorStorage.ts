import { create } from 'zustand';

type State = {
  authenticated: boolean;
  token: string;
  username: string;
};

type Action = {
  setAuthenticated: (authenticated: State['authenticated']) => void;
  setToken: (token: State['token']) => void;
  setUsername: (username: State['username']) => void;
};

const useEditorStorage = create<State & Action>(set => ({
  token: '',
  setToken: token => set({ token }),
  authenticated: true,
  setAuthenticated: authenticated => set({ authenticated }),
  username: 'Angelillo15',
  setUsername: username => set({ username }),
}));

export default useEditorStorage;
