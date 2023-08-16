import { gql, useQuery } from "@apollo/client";

export const UsersScreen = () => {
  const GET_USERS_QUERY = gql`
    query {
      users {
        email
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const users = data.users;
  console.log(users);

  return <div></div>;
};
