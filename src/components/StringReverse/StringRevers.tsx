import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";
import { MyInput } from "../UI/MyInput";
import { CodeModal } from "../CodeModal";
import codeImg from './image.png';

export const StringReverse: React.FC = () => {
  const [value, setValue] = useState('');
  const [reversStr, setReversStr] = useState('');

  const stringRevers = useMemo(() => {
    const revers = [];
    for (let i = 0; i < value.length; i++) {
      revers[i] = value[value.length - 1 - i];
    }
    return revers.join('');
  }, [value]);

  useEffect(() => {
    setReversStr(stringRevers);
  }, [stringRevers]);

  return (
    <Box>
      <Box pb={2}>
        <Typography variant="h4">
          Строка наоборот
        </Typography>
      </Box>
      <MyInput
        label={value && 'StringReverse'}
        placeholder="Введите строку"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        fullWidth
      />
      {reversStr && (
        <>
          <Box pt={2}>
            <Typography variant="h5">
              Результат:
            </Typography>
          </Box>
          <Box pl={5}>
            <Typography variant="h6">
              {reversStr}
            </Typography>
          </Box>
        </>
      )}
      <CodeModal codeImg={codeImg} />
    </Box>
  );
};