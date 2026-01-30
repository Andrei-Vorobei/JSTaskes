import { Box, Button, CSSProperties, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

type CodeModalType = {
  codeImg: string;
}

export const CodeModal: React.FC<CodeModalType> = ({
  codeImg
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const codeButton: CSSProperties = {
    paddingTop: 2,
    display: 'flex',
    justifyContent: 'end'
  };

  const imgStyles: CSSProperties = {
    display: 'block',
  };

  return (
    <Box sx={ codeButton }>
      <Button
        variant="outlined"
        onClick={() => setIsOpen(true)}
      >
        Показать код
      </Button>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          maxWidth={false}
        >
          <DialogTitle>
            Имплементация
          </DialogTitle>
          <DialogContent>
            <img src={codeImg} style={ imgStyles } />
          </DialogContent>
        </Dialog>
    </Box>
  );
};
