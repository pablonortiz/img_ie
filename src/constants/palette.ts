export type ColorType = 'main' | 'alt' | 'base';
export type ColorKey = 'primary' | 'secondary' | 'white' | 'black' | 'grey';

export interface Palette {
  main: {
    primary: string;
    secondary: string;
  };
  alt: {
    primary: string;
    secondary: string;
  };
  base: {
    white: string;
    black: string;
    grey: string;
  };
}

const palette: Palette = {
  main: {
    primary: '#57B0F2',
    secondary: '#007BD7',
  },

  alt: {
    primary: '#23395B',
    secondary: '#192a45',
  },

  base: {
    white: '#FFFFFF',
    black: '#000000',
    grey: '#989a9e',
  },
};

export default palette;
