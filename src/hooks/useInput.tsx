import React, { useState, useCallback } from "react";

// 커스텀 훅을 사용할 때 return 부분에 관한 타입을 지정해주어야 한다.
type UserInputProps = [string, React.Dispatch<React.SetStateAction<string>>, (event: React.ChangeEvent<HTMLInputElement>) => void];

const useInput = (initialValue = ""): UserInputProps => {
  const [value, setValue] = useState<string>(initialValue);
  const handler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);
  return [value, setValue, handler];
};

export default useInput;
