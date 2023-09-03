import BasicModal from "../../../shared/components/BasicModal/BasicModal";
import { IconButton } from "@material-ui/core";
import { AssignUserTabs } from "../components/AssignUserTabs/AssignUserTabs";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
interface Props {
  isOpen: boolean;
  closeModal: () => void;
  onAssignUser: () => void;
}

export const AssignUserModal = ({ isOpen, closeModal, onAssignUser }: Props) => {
  return (
    <BasicModal isOpen={isOpen}>
      <IconButton onClick={closeModal}>
        <CancelPresentationIcon />
      </IconButton>
      <AssignUserTabs onAssignUser={onAssignUser} />
    </BasicModal>
  );
};
