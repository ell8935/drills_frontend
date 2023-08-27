export {};
// import { gql, useQuery } from "@apollo/client";
// import { Club } from "../types/club.types";

// export const GET_CLUB_BY_ID = gql`
//   query findOneById($clubId: String!) {
//     findOneById(clubId: $clubId) {
//       clubName
//       sport
//       clubManager
//       clubAdmin
//       teamsCount
//       playersCount
//       league
//       city
//       country
//       logo
//       description
//       contactInformation
//     }
//   }
// `;

// type CustomClubData = {
//   findOneById: Club;
// };

// export const useClub = (clubId: string) => {
//   const { data, error, loading } = useQuery<CustomClubData>(GET_CLUB_BY_ID, {
//     variables: { clubId },
//     skip: clubId === "",
//   });

//   return { data, error, loading };
// };
