import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, Outlet } from "react-router";
import { MAIN_NAVIGATION } from "~/features/navigation/constants";
import { classnames } from "../util";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh w-dvw">
      <aside className="self-stretch border-r ">
        <nav>
          <ul className="flex flex-col items-center">
            {MAIN_NAVIGATION.map(({ route, label, icon }) => (
              <li key={route}>
                <NavLink
                  className={({ isActive }) =>
                    classnames("p-3 flex items-center justify-center aspect-square shrink-0 dark:hover:bg-gray-900 hover:bg-gray-100", {
                      "dark:bg-purple-950 dark:hover:bg-purple-900 hover:bg-gray-200": isActive,
                    })
                  }
                  to={route}
                  viewTransition
                >
                  <span className="sr-only">{label}</span>
                  <FontAwesomeIcon icon={icon} />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
