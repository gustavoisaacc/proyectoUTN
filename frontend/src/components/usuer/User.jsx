import Li from "../ui/Li";

function User({ item }) {
  return (
    <Li className="grid-cols-5 px-5">
      <span>{item.name}</span>
      <span>{item.roles.map((item) => item.name)}</span>
    </Li>
  );
}

export default User;
