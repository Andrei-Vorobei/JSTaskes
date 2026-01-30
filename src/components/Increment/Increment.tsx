import { Box, CSSProperties, Typography } from "@mui/material";
import { CodeModal } from "../CodeModal";
import { Buttons } from "./Buttons";
import { useCount } from "./useCount";
import codeImg from './code.png';

export const Increment: React.FC = () => {

  const {
    increment,
    decrement,
    reset,
    count
  } = useCount(0);

  const content: CSSProperties = {
    display: 'flex',
  };

  const countStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  };

  return (
    <Box>
      <Box pb={2}>
        <Typography variant="h4">Инкремент/Декремент</Typography>
      </Box>
      <Box sx={ content }>
        <Buttons increment={increment} decrement={decrement} reset={reset} />
        <Box sx={ countStyle }>
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>{count}</Typography>
        </Box>
      </Box>
      <CodeModal codeImg={codeImg} />
    </Box>
  );
};
