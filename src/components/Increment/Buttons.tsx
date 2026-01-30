import { Box, Button, CSSProperties } from "@mui/material";

type ButtonsType = {
  increment: ()=>void;
  decrement: ()=>void;
  reset: ()=>void;
}

export const Buttons: React.FC<ButtonsType> = ({
  increment,
  decrement,
  reset
}) => {

  const buttonBlock: CSSProperties = {
    display: 'flex',
    gap: 2,
    flexDirection: 'column'
  }

  const buttons: CSSProperties = {
    display: 'flex',
    gap: 2
  }

  return (
    <Box sx={ buttonBlock }>
      <Box sx={ buttons }>
        <Button
          color='primary'
          variant='contained'
          onClick={decrement}
        >
          dec
        </Button>
        <Button
          color='primary'
          variant='contained'
          onClick={increment}
        >
          inc
        </Button>
      </Box>
      <Button
        color='primary'
        variant='contained'
        onClick={reset}
      >
        Reset
      </Button>
    </Box>
  );
};