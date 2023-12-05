import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type FormData = {
  phoneNumber: string;
  email: string;
  programmerType: string;
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
  parentHeight: string;
  setParentHeight: (height: string) => void;
  containerHeight: (index: number) => string;
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
  const [parentHeight, setParentHeight] = useState("");
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    programmerType: "",
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

  const containerHeight = (index: number) => {
    switch (index) {
      case 3:
        return "h-[278px]";
      case 5:
        return "h-[300px]";
      default:
        return "h-full";
    }
  };

  const contextValue: MultiStepContextProps = {
    currentStepIndex,
    next,
    back,
    formData,
    setFormData,
    parentHeight,
    setParentHeight,
    containerHeight,
  };

  useEffect(() => {
    switch (currentStepIndex) {
      case 3:
        setParentHeight("h-[278px]");
        break;
      case 5:
        setParentHeight("h-[300px]");
        break;
      default:
        setParentHeight("h-full");
    }
  }, [currentStepIndex]);

  return (
    <MultiStepContext.Provider value={contextValue}>
      {children}
    </MultiStepContext.Provider>
  );
};
