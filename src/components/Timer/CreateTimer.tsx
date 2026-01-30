import { useState } from "react";
import { Box, Button, Dialog, DialogContent } from "@mui/material";
// import DatePicker from "react-datepicker";

export const CreateTimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());


  return (
    <Box>
      <Button
        onClick={() => setIsOpen(true)}
      >
        Создать таймер
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth={false}
      >
        <DialogContent>
          {/* <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          /> */}
        </DialogContent>
      </Dialog>
    </Box>
  );
};
