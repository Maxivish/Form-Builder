/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MenuItem = ({ text, path }) => {
  return (
    <li>
      <Link
        to={path}
        className="p-2 text-white rounded-lg hover:bg-violet-700 group"
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
