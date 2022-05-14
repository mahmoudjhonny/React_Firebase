import { CREATE_PROJECT } from "../ActionTypes/actionsType";

const initialState = {
  projects: [
    {
      id: "1",
      title: "help me find peach",
      content: "blah blah blah",
      date: "22 Jun 2022",
      posted: "Mahmoud Mostafa",
    },
    {
      id: "2",
      title: "collect all the stars",
      content: "blah blah blah",
      date: "22 Jun 2022",
      posted: "Mahmoud Mostafa",
    },
    {
      id: "3",
      title: "egg hunt with yoshi",
      content: "blah blah blah",
      date: "22 Jun 2022",
      posted: "Mahmoud Mostafa",
    },
  ],
};
const projectReduces = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log("reducers: ", action.payload);
    default:
      return state;
  }
};

export default projectReduces;
