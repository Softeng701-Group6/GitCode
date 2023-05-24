import { useState } from "react";
import GreenButton from "../../components/GreenButton/GreenButton";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import QuestionEndModal from "../../components/QuestionEndModal/QuestionEndModal";
import "./QuestionPage.module.css";

const QuestionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <NavigationBar />
      <GreenButton onClick={handleModalOpen}>Submit</GreenButton>
      {isModalOpen && <QuestionEndModal onClose={handleModalClose} />}
    </div>
  );
};

export default QuestionPage;
