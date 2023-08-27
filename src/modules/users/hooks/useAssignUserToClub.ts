// import { gql, useMutation } from "@apollo/client";
// import { UserRoleClub } from "../types/userTypes";

// export const ASSIGN_USER_TO_CLUB = gql`
//   mutation associateUserWithClubAndRole($userId: String!, $clubId: String!, $roleId: String!) {
//     associateUserWithClubAndRole(userId: $userId, clubId: $clubId, roleId: $roleId) {
//       id
//     }
//   }
// `;

// export const useAssignUserToClub = ({ userId, clubId, roleName }: UserRoleClub) => {
//   const [associateUserWithClubAndRole, { data, error, loading }] = useMutation(ASSIGN_USER_TO_CLUB, {
//     variables: { userId, clubId, roleName },
//   });

//   return { associateUserWithClubAndRole, data, error, loading };
// };
export {};
