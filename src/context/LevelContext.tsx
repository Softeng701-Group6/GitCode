import React, { ReactElement, useEffect, useState } from 'react';
import { Question } from '../models/types';
import { DUMMY_DATA_QUESTIONS } from '../data/dummyData';

export interface LevelContextType {
  selectedQuestion: Question;
  setQuestion: (question: Question) => void;
}

const LevelContext = React.createContext<LevelContextType>({} as LevelContextType);

type Props = {
  children: ReactElement | ReactElement[]
}

function LevelContextProvider({children}: Props) {
  const [selectedQuestion, setSelectedQuestion] = useState<Question>(DUMMY_DATA_QUESTIONS[0]);
  
  const setQuestion = (question: Question) => {
    setSelectedQuestion(question);
  };

  return (
    <LevelContext.Provider value={{
      selectedQuestion,
      setQuestion,
    }}>
      {children}
    </LevelContext.Provider>
  );
}

export {
  LevelContext,
  LevelContextProvider
};