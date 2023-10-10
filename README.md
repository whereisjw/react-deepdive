# 마우스 커서 따라가기 구현

```
function AppXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <>
      <div
        className="container"
        onPointerMove={(e) => {
          console.log(e.clientX, e.clientY);
          setX(e.clientX);
          setY(e.clientY);
        }}>
        <div
          className="pointer"
          style={{ transform: `translate(${x}px,${y}px)` }}></div>
      </div>
    </>
  );
}
```

위처럼 구현이 가능하지만

```

function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <div
        className="container"
        onPointerMove={(e) => {
          console.log(e.clientX, e.clientY);
          setPosition({ x: e.clientX, y: e.clientY });
        }}>
        <div
          className="pointer"
          style={{
            transform: `translate(${position.x}px,${position.y}px)`,
          }}></div>
      </div>
    </>
  );
}
```

x y 좌표를 객체로 묶어서 usestate안으로 값을 넣을 수 있다.

# 중첩객체상태관리(프롬프트값 반영, 멘토바꾸기)

```
import React, { useState } from "react";

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name },
          }));
        }}>
        멘토 이름 바꾸기
      </button>
      <button
        onClick={(e) => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title },
          }));
        }}>
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
```

# 배열상태관리

```
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
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((v) => {
              return v.name == prev ? { ...v, name: current } : { ...v };
            }),
          }));
        }}>
        멘토의 이름을 바꾸기
      </button>
      <button
        onClick={() => {
          const name = prompt("추가하고 싶은 멘토의 이름은?");
          const title = prompt("추가하고 싶은 멘토의 타이틀은?");

          setPerson((person) => ({
            ...person,
            mentors: [{ name, title }, ...person.mentors],
          }));
        }}>
        멘토추가하기
      </button>
      <button
        onClick={() => {
          const delName = prompt(`누구를 삭제하고 싶은가요?`);

          setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((v) => {
              return v.name !== delName;
            }),
          }));
        }}>
        멘토삭제하기
      </button>
    </div>
  );
};

export default Appmentors;

```

# immer

npm add immer use-immer

# context api

언어,테마(다크모드),로그인

```
import React, { createContext, useState } from "react";

export const DarkModeContext = createContext();
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      !prev;
    });
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
```

darkmodecontext를 받을 jsx파일을 하나 만들어서 위와같이 작성한다
