import { signOut, useSession } from 'next-auth/react';

const LogoutButton = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <button onClick={handleLogout}>
      Logout {session?.user?.name} {/* Display the user's name if available */}
    </button>
  );
};

export default LogoutButton;