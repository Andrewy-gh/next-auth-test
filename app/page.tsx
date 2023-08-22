import { getServerSession } from 'next-auth/next';
import { options } from './options';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

export default async function Home() {
  const session = await getServerSession(options);
  //   session:  {
  //   user: {
  //     name,
  //     email,
  //     image,
  //   }
  // }

  const loginButtons = (
    <>
      <div className="mb-1">
        <LoginButton provider={'github'} />
      </div>
      <div>
        <LoginButton provider={'google'} />
      </div>
    </>
  );

  const sessionInterface = (
    <>
      <div>{session?.user?.name}</div>
      <LogoutButton />
    </>
  );

  return (
    <main>
      <h1>Log in page</h1>
      {session ? sessionInterface : loginButtons}
    </main>
  );
}
