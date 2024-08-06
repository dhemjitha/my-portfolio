import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Navigation() {
  return (
    <nav className="flex py-5 gap-x-10 justify-between items-center">
      <div>
        <Link
          to={"/"}
          className="text-3xl font-medium font-semibold text-underlay-1"
        >
          DulranDev
        </Link>
      </div>
      <div className="flex justify-center gap-x-2 items-center">
        <Button variant="ghost">
          <Link to={"/"}>Home</Link>
        </Button>

        <Button variant="ghost">
          <Link to={"/about"}>About</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navigation;
