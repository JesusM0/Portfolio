import { Link } from "react-router-dom";

//Left Side of Home Page
export const SideBar = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Left Home</h1>
      <Link to={"/about"}>About</Link>
    </div>
  );
};
