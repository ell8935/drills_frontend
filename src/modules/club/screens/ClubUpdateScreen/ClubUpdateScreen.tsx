import { useState } from "react";
import CustomTextField from "../../../../shared/components/CustomTextField";
import { Alert, Button } from "@mui/material";
import useForm from "../../../../shared/hooks/useForm";
import { useParams } from "react-router-dom";
import { postUpdateClub } from "../../api/postUpdateClub";

const ClubUpdateScreen = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const { errors, form, handleOnBlur, handleOnChange, isFormValid } = useForm({
    initialState: {
      clubName: "asd",
      sport: "asd",
      league: "asd",
      city: "asd",
      country: "asd",
      logo: "asd",
      description: "asd",
      foundedAt: "1992",
      website: "asd",
      email: "ssad",
      phoneNumber: "asd",
    },
  });

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (await isFormValid()) {
      try {
        const { data } = await postUpdateClub({ ...form, clubId: id! });
        setStatus(data.message);
      } catch (err: any) {
        setStatus(err.response.data.message);
      }
    }
  };

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
          className="foundedAt"
          name="foundedAt"
          label="Founded at"
          error={errors.foundedAt}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.foundedAt}
          fullWidth
        />
        <CustomTextField
          className="website"
          name="website"
          label="Website"
          error={errors.website}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.website}
          fullWidth
        />
        <CustomTextField
          className="email"
          name="email"
          label="Email"
          error={errors.email}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.email}
          fullWidth
        />
        <CustomTextField
          className="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          error={errors.phoneNumber}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          helperText={errors.phoneNumber}
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
