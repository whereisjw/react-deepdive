import React, { useState } from "react";

const Appmentors = () => {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentors: [
      {
        name: "밥",
        title: "시니어개발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
    ],
  });
  const handleChange = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((v) => {
        return v.name == prev ? { ...v, name: current } : { ...v };
      }),
    }));
  };
  const handleAdd = () => {
    const name = prompt("추가하고 싶은 멘토의 이름은?");
    const title = prompt("추가하고 싶은 멘토의 타이틀은?");

    setPerson((person) => ({
      ...person,
      mentors: [{ name, title }, ...person.mentors],
    }));
  };
  const handleDel = () => {
    const delName = prompt(`누구를 삭제하고 싶은가요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((v) => {
        return v.name !== delName;
      }),
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleChange}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토추가하기</button>
      <button onClick={handleDel}>멘토삭제하기</button>
    </div>
  );
};

export default Appmentors;
