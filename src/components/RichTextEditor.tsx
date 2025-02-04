import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setContent } from "../redux/textEditorSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user); // Fetch user data
  const storedContent = useSelector((state: RootState) => state.textEditor.content);
  const [editorContent, setEditorContent] = useState(storedContent);

  // Convert user data into formatted HTML
  const formatUserData = () => `
    <p><strong>Name:</strong> ${user.name || ""}</p>
    <p><strong>Address:</strong> ${user.address || ""}</p>
    <p><strong>Email:</strong> ${user.email || ""}</p>
    <p><strong>Phone:</strong> ${user.phone || ""}</p>
  `;

  useEffect(() => {
    // Check if the user data has changed
    const updatedContent = formatUserData();
    
    // Only update if user data has changed significantly
    if (storedContent.trim() !== updatedContent.trim()) {
      setEditorContent(updatedContent);
      dispatch(setContent(updatedContent)); // Update editor content in Redux
    }
  }, [user, dispatch]);

  // Handle editor content changes
  const handleChange = (content: string) => {
    setEditorContent(content);
    dispatch(setContent(content));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Rich Text Editor (User Data)</h2>
      <ReactQuill value={editorContent} onChange={handleChange} theme="snow" />
    </div>
  );
};

export default TextEditor;
