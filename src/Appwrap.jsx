import React from "react";

const Appwrap = () => {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1695642579321-fcb1fc79b976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          name="kim bob"
          size={200}
        />
        <p>안녕하세요</p>
      </Navbar>
    </div>
  );
};

const Navbar = ({ children }) => {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
};

const Avatar = ({ image, name, size }) => {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: `50%` }}
      />
    </div>
  );
};

export default Appwrap;
