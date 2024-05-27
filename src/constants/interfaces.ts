import {ActionType, IconOrientation, ImageAction} from './types';

// General Interfaces

export interface ReduxAction {
  type: string;
  payload: any;
}

export interface State {
  images: {
    selectedImage: string;
  };
  userActions: {
    selectedAction: string;
    history: UserAction[] | [];
  };
}

export interface ActionOnImage {
  action: ImageAction;
  label: string;
  type?: ActionType;
  value?: string;
}

export interface UserAction {
  id: string;
  url: string;
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
