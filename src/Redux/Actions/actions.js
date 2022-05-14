import { CREATE_PROJECT } from "../ActionTypes/actionsType";

export const Create_Project = (title, content) => {
  return {
    type: CREATE_PROJECT,
    payload: { title, content },
  };
};

export const excuteFunc = () => {
  return (dispatch) => {
    dispatch(Create_Project());
  };
};
