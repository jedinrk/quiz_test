import React, { ReactNode, createContext, useContext, useState } from "react";

type FormData = {
  phoneNumber: string;
  email: string;
  timeSlot: string;
  investedWithAzizi: boolean;
  propertyType: string;
  investedInUAE: boolean;
};

interface MultiStepContextProps {
  currentStepIndex: number;
  next: () => void;
  back: () => void;
  formData: FormData;
  setFormData: (newData: FormData) => void;
}

const MultiStepContext = createContext<MultiStepContextProps | undefined>(
  undefined
);

export const useMultiStepContext = () => {
  const context = useContext(MultiStepContext);
  if (!context) {
    throw new Error(
      "useMultiStepContext must be used within a MultiStepFormProvider"
    );
  }
  return context;
};

export const MultiStepFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentStepIndex, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    timeSlot: "",
    investedWithAzizi: false,
    propertyType: "",
    investedInUAE: false,
  });

  const next = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const back = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const contextValue: MultiStepContextProps = {
    currentStepIndex,
    next,
    back,
    formData,
    setFormData,
  };

  return (
    <MultiStepContext.Provider value={contextValue}>
      {children}
    </MultiStepContext.Provider>
  );
};
