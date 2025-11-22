import { useContext } from 'react';
import { AudioContext } from '@/context/audio-context';

export const useAudio = () => {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error('useAudio must be used within a AudioProvider');
  }

  return context;
};
