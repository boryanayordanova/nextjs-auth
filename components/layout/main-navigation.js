import Link from "next/link";

import classes from "./main-navigation.module.css";
import { useSession, signOut } from "next-auth/react";

function MainNavigation() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {/* {!session && status === "authenticated" ? (
            <li className={classes.welcome}>Welcome, {session.user.email}</li>
          ) : (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )} */}
          {!session && status !== "loading" && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={() => signOut()}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
