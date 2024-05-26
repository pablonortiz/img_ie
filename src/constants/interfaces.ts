import {ActionType, IconOrientation, ImageAction, ImageActionValue} from './types';

// General Interfaces

export interface ReduxAction {
  type: string;
  payload: any;
}

export interface State {
  images: {
    selectedImage: string;
    userActions: UserAction[] | [];
  };
}

export interface ActionOnImage {
  action: ImageAction;
  label: string;
  type?: ActionType;
  value?: ImageActionValue;
}

export interface UserAction {
  id: string;
  userActions: [
    {
      image: string;
      active: boolean;
    },
  ];
}

export interface URLActionData {
  url: string;
  action: string;
  value: string;
  name?: string;
}

// Specific Interfaces

export interface IconData {
  name: string;
  orientation?: IconOrientation;
}

export interface ActionButton {
  label: string;
  actionType: ActionType;
  imageAction: string;
}
