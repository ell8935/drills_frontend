import { useState } from "react";
import CustomTextField from "../../../../shared/components/CustomTextField";
import { Alert, Button } from "@mui/material";
import useForm from "../../../../shared/hooks/useForm";
import { useMutation } from "@apollo/client";
import { UPDATE_CLUB } from "../../queries/updateClub";
import { useParams } from "react-router-dom";

const ClubUpdateScreen = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const { errors, form, handleOnBlur, handleOnChange, isFormValid } = useForm({
    initialState: {
      clubName: "asd",
      sport: "asd",
      clubManager: "asd",
      clubAdmin: "asd",
      teamsCount: 2,
      playersCount: 3,
      league: "asd",
      city: "asd",
      country: "asd",
      logo: "asd",
      description: "asd",
      contactInformation: "asd",
    },
  });
  const [UpdateClub, { error, loading }] = useMutation(UPDATE_CLUB, {
    variables: { updateClubInput: { ...form, clubId: id } },
  });

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (await isFormValid()) {
      try {
        const { data } = await UpdateClub();
        setStatus(data.message);
      } catch (err: any) {
        setStatus(err.response.data.message);
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <form>
        <CustomTextField
          className="clubName"
          name="clubName"
          label="Club Name"
          error={errors.clubName}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.clubName}
          fullWidth
        />
        <CustomTextField
          className="sport"
          name="sport"
          label="Sport"
          error={errors.sport}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.sport}
          fullWidth
        />
        <CustomTextField
          className="clubManager"
          name="clubManager"
          label="Club Manager"
          error={errors.clubManager}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.clubManager}
          fullWidth
        />
        <CustomTextField
          className="clubAdmin"
          name="clubAdmin"
          label="Club Admin"
          error={errors.clubAdmin}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.clubAdmin}
          fullWidth
        />
        <CustomTextField
          className="teamsCount"
          name="teamsCount"
          label="Teams Count"
          type="number"
          error={errors.teamsCount}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.teamsCount}
          fullWidth
        />
        <CustomTextField
          className="playersCount"
          name="playersCount"
          label="PlayersCount"
          type="number"
          error={errors.playersCount}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.playersCount}
          fullWidth
        />
        <CustomTextField
          className="league"
          name="league"
          label="League"
          error={errors.league}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.league}
          fullWidth
        />
        <CustomTextField
          className="city"
          name="city"
          label="City"
          error={errors.city}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.city}
          fullWidth
        />
        <CustomTextField
          className="country"
          name="country"
          label="Country"
          error={errors.country}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.country}
          fullWidth
        />
        <CustomTextField
          className="logo"
          name="logo"
          label="Logo"
          error={errors.logo}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.logo}
          fullWidth
        />
        <CustomTextField
          className="description"
          name="description"
          label="Description"
          error={errors.description}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.description}
          fullWidth
        />
        <CustomTextField
          className="contactInformation"
          name="contactInformation"
          label="contactInformation"
          error={errors.contactInformation}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.contactInformation}
          fullWidth
        />

        {status && <Alert severity="error">{status}</Alert>}
        <Button variant="contained" onClick={handleOnSubmit} type="submit" fullWidth>
          Continue
        </Button>
      </form>
    </div>
  );
};

export default ClubUpdateScreen;
