import actionTypes from '../const/actionTypes';

export const reset = () => {return { type: actionTypes.RESET}}

export const updateID = (value) => {return { type: actionTypes.UPDATE_ID,value:value}}

export const followRecipe = (value) => {return { type: actionTypes.FOLLOW_RECIPE,value:value}}