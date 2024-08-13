// lib/staticData.ts
import prefixes from '@/prefixes.json';

export const getStaticData = () => {
  return {
    prefixes: prefixes.prefixes,
    initialName: "beispielfirma"
  };
};