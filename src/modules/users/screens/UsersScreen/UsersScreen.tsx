import { useUser } from "../../hooks/useUser";

export const UsersScreen = () => {
  const { loading, error, data } = useUser("asdasd@gmail.com");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div></div>;
};
