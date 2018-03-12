import { createStore, applyMiddleware, GenericStoreEnhancer, compose } from 'redux';
import { IAppState, reducer } from './index';
import freezeState from './freezeState';

declare var window: any; //for debugging
const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
    ? window.devToolsExtension() : (f) => f; //apply devTools for debugging or pass null function.

export const store = createStore<IAppState>(reducer,
    compose(applyMiddleware(freezeState), devToolsExtension) as GenericStoreEnhancer);