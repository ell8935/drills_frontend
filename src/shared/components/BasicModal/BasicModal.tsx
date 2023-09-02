import Modal from "@mui/material/Modal";
import "./styles.css";

interface Props {
  isOpen: boolean;
  children: string | JSX.Element | JSX.Element[] | undefined | null;
  className?: string;
}

const BasicModal = ({ className, isOpen, children }: Props) => {
  return (
    <Modal open={isOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <div className={`basicModal ${className}`}>{children}</div>
    </Modal>
  );
};

export default BasicModal;
