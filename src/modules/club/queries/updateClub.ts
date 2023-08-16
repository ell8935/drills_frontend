import { Club as UpdateClubInput } from "./../types/club.types";
import { gql, useMutation } from "@apollo/client";

export const UPDATE_CLUB = gql`
  mutation updateClub($updateClubInput: UpdateClubInput!) {
    updateClub(updateClubInput: $updateClubInput) {
      clubName
      sport
      clubManager
      clubAdmin
      teamsCount
      playersCount
      league
      city
      country
      logo
      description
      contactInformation
    }
  }
`;

export const useUpdateClub = (form: UpdateClubInput) => {
  const [updateClub, { data, error, loading }] = useMutation(UPDATE_CLUB, {
    variables: { updateClubInput: form },
  });
  console.log(data);

  return { updateClub, data, error, loading };
};
