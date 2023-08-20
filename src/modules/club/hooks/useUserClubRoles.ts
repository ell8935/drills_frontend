import { gql, useQuery } from "@apollo/client";

export const GET_USER_CLUB_ROLES = gql`
  query GetUserRolesInClub($userId: String!, $clubId: String!) {
    userRolesInClub(userId: $userId, clubId: $clubId) {
      roleId
      rollName
      description
    }
  }
`;

// Define a custom hook to query user club roles
export function useUserRolesInClub({ userId, clubId }: { userId: string; clubId: string | undefined }) {
  const { loading, error, data } = useQuery(GET_USER_CLUB_ROLES, {
    variables: { userId, clubId },
  });

  return {
    loading,
    error,
    data,
  };
}
