import React, { useReducer } from "react";

const personReducer = (person, action) => {

  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((v) => {
          return v.name == prev ? { ...v, name: current } : { ...v };
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [{ name, title }, ...person.mentors],
      };
    }
    case "deleted": {
      return {
        ...person,
        mentors: person.mentors.filter((v) => {
          return v.name !== delName;
        }),
      };
      default:{
        throw Error(`알수없는 액션타입이다: ${action.type}`)
      }
    }
  }
};

export default personReducer;
