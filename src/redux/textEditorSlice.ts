import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditorState {
  content: string;
}

const storedUserData = localStorage.getItem("userData");
const userData = storedUserData ? JSON.parse(storedUserData) : null;

// Format user data into HTML for editor
const formattedUserData = userData
  ? `
    <p><strong>Name:</strong> ${userData.name || ""}</p>
    <p><strong>Address:</strong> ${userData.address || ""}</p>
    <p><strong>Email:</strong> ${userData.email || ""}</p>
    <p><strong>Phone:</strong> ${userData.phone || ""}</p>
  `
  : `<p><strong>Name:</strong></p><p><strong>Address:</strong></p><p><strong>Email:</strong></p><p><strong>Phone:</strong></p>`;

const storedContent = localStorage.getItem("editorContent");

const initialState: EditorState = {
  content: storedContent || formattedUserData,
};

const textEditorSlice = createSlice({
  name: "textEditor",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
      localStorage.setItem("editorContent", action.payload);
    },
    updateFromUserData: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
      localStorage.setItem("editorContent", action.payload);
    },
  },
});

export const { setContent, updateFromUserData } = textEditorSlice.actions;
export default textEditorSlice.reducer;
