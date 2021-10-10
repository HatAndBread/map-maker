import React from 'react';
import { useAppContext } from '../../Context';

export const useIsBeingEdited = () =>
  ['maps#new', 'maps#edit'].includes(
    useAppContext()?.controllerData?.controllerAction
  );
