import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Create_Project } from "../../Redux/Actions/actions";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Create_Project(title, content));
  };
  return (
    <Stack
      direction="column"
      style={{ padding: "21px", margin: "15px 30px 0 20px" }}
      spacing={3}
    >
      <Typography variant="h4" component="h6" color="primary">
        Create Project
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={3}>
          <TextField
            label="Title"
            variant="standard"
            size="medium"
            required
            sx={{ width: 700 }}
            type="text"
            error={!title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Content"
            variant="standard"
            size="medium"
            required
            sx={{ width: 700 }}
            type="text"
            error={!content}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ height: 50, width: 100 }}
            color="secondary"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreateProject;
