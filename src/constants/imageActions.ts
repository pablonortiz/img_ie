const imageActions = [
  {
    label: 'Flip',
    action: 'flip',
    type: 'picker',
    values: ['h', 'v', 'hv'],
  },
  {label: 'Orientation', action: 'orient', type: 'picker', values: ['1', '2', '3', '4', '5', '6', '7', '8', '90', '180', '270']},
  {label: 'Rotation', action: 'rot', type: 'slider', values: [0, 359]},
  {label: 'Brightness', action: 'bri', type: 'slider', values: [-100, 100]},
  {label: 'Contrast', action: 'con', type: 'slider', values: [-100, 100]},
  {label: 'Exposure', action: 'exp', type: 'slider', values: [-100, 100]},
  {label: 'Gamma', action: 'gam', type: 'slider', values: [-100, 100]},
  {label: 'Highlight', action: 'high', type: 'slider', values: [-100, 0]},
  {label: 'Hue Shift', action: 'hue', type: 'slider', values: [0, 360]},
  {label: 'Invert', action: 'invert', type: 'picker', values: ['0', '1']},
  {label: 'Saturation', action: 'sat', type: 'slider', values: [-100, 100]},
  {label: 'Shadow', action: 'shad', type: 'slider', values: [0, 100]},
  {label: 'Sharpness', action: 'sharp', type: 'slider', values: [0, 100]},
  {label: 'Unsharp Mask', action: 'usm', type: 'slider', values: [-100, 100]},
  {label: 'Unsharp Mask Radius', action: 'usmrad', type: 'slider', values: [-100, 100]},
  {label: 'Vibrancy', action: 'vib', type: 'slider', values: [-100, 100]},
];

export default imageActions;
