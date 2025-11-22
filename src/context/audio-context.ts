import { createContext } from 'react';

export interface AudioContext {
  isPlaying: boolean;
  handleSound: () => void;
  playMusic: () => void;
  stopMusic: () => void;
}

export const AudioContext = createContext<AudioContext | null>(null);
