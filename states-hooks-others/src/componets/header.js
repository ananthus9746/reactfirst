import "./header.css";
function Header({ name, count, place }) {
  return (
    <div>
      <h1 className="header">
        Header count:{count} , name:{name}
      </h1>

      <h4>Place:{place}</h4>
    </div>
  );
}

export default Header;
