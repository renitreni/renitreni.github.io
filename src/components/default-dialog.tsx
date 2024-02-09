import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

export default function DefaultDialog(param: { projectTitle: string, imgProject: string, descProject: string }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" placeholder={undefined}>
        See Details
      </Button>
      <Dialog open={open} handler={handleOpen} placeholder={""}>
        <DialogHeader placeholder={""}>{param.projectTitle}</DialogHeader>
        <DialogBody placeholder={""}>
          {param.descProject}
        </DialogBody>
        <DialogFooter placeholder={""}>
          <Button
            placeholder={""}
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
