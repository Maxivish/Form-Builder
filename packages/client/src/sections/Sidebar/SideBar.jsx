import Menu from "./Menu";
import MenuItem from "./MenuItem";

/* eslint-disable react/prop-types */
const Sidebar = () => {
  return (
    <aside className="bg-violet-600 border-b border-solid border-b-violet-700 fixed top-14 left-0 right-0 z-40 flex justify-between p-4">
      <div className="flex-1">
        <Menu>
          <MenuItem path="/forms" text="Home" />
        </Menu>
      </div>
      <div className="flex-1 flex justify-end px-5">
        <Menu>
          <MenuItem path="/login" text="Logout" />
        </Menu>
      </div>
    </aside>
  );
};

export default Sidebar;
