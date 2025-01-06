import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const App: React.FC = () => {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [knowledgeBaseFile, setKnowledgeBaseFile] = useState<File | null>(null);
  const [voiceRecordingFile, setVoiceRecordingFile] = useState<File | null>(null);
  const [script, setScript] = useState<string>('');
  const [animation, setAnimation] = useState<string>('Idle');
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [visionPositioningFile, setVisionPositioningFile] = useState<File | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [orientation, setOrientation] = useState({ x: 0, y: 0, z: 0 });
  const [size, setSize] = useState<number>(1);
  const [qrCode, setQrCode] = useState<string | null>(null);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAvatarFile(e.target.files[0]);
    }
  };

  const handleKnowledgeBaseUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setKnowledgeBaseFile(e.target.files[0]);
    }
  };

  const handleVoiceRecordingUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVoiceRecordingFile(e.target.files[0]);
    }
  };

  const handleVisionPositioningUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setVisionPositioningFile(e.target.files[0]);
    }
  };

  const handleSaveProgress = () => {
    // Save progress logic here
    alert('Progress saved!');
  };

  const handleTestAvatar = () => {
    // Test avatar logic here
    alert('Avatar tested successfully!');
  };

  const handleGenerateQrCode = () => {
    if (avatarFile && knowledgeBaseFile && voiceRecordingFile && script && animation && latitude && longitude && visionPositioningFile) {
      setQrCode('https://example.com/qr-code');
      alert('QR Code generated!');
    } else {
      alert('Please complete all fields before generating the QR Code.');
    }
  };

  return (
    <div className="min- bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Holoport XR Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Avatar Upload */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Import Your Avatar</h2>
          <input type="file" accept=".glb" onChange={handleAvatarUpload} className="mb-4" />
          {avatarFile && <p className="text-green-400">Uploaded: {avatarFile.name}</p>}
        </div>

        {/* Knowledge Base Upload */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">AI Knowledge Base Upload</h2>
          <input type="file" accept=".pdf" onChange={handleKnowledgeBaseUpload} className="mb-4" />
          {knowledgeBaseFile && <p className="text-green-400">Uploaded: {knowledgeBaseFile.name}</p>}
        </div>

        {/* Voice Recording */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Voice Recording</h2>
          <input type="file" accept=".mp3" onChange={handleVoiceRecordingUpload} className="mb-4" />
          {voiceRecordingFile && <p className="text-green-400">Uploaded: {voiceRecordingFile.name}</p>}
        </div>

        {/* Script Input */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Script Input</h2>
          <textarea
            rows={4}
            className="w-full p-2 bg-gray-700 rounded mb-4"
            placeholder="Enter your script here..."
            value={script}
            onChange={(e) => setScript(e.target.value)}
          />
        </div>

        {/* Animation Selection */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Animation Selection</h2>
          <select
            className="w-full p-2 bg-gray-700 rounded mb-4"
            value={animation}
            onChange={(e) => setAnimation(e.target.value)}
          >
            <option value="Idle">Idle</option>
            <option value="Walking">Walking</option>
            <option value="Running">Running</option>
            <option value="Dancing">Dancing</option>
          </select>
        </div>

        {/* GPS Location */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">GPS Location</h2>
          <div className="flex gap-4">
            <input
              type="text"
              className="w-full p-2 bg-gray-700 rounded mb-4"
              placeholder="Latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-2 bg-gray-700 rounded mb-4"
              placeholder="Longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
        </div>

        {/* Vision Positioning */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Vision Positioning</h2>
          <input type="file" accept="image/*" onChange={handleVisionPositioningUpload} className="mb-4" />
          {visionPositioningFile && <p className="text-green-400">Uploaded: {visionPositioningFile.name}</p>}
        </div>

        {/* Character Settings */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Character Settings</h2>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="number"
              className="p-2 bg-gray-700 rounded"
              placeholder="X"
              value={position.x}
              onChange={(e) => setPosition({ ...position, x: parseFloat(e.target.value) })}
            />
            <input
              type="number"
              className="p-2 bg-gray-700 rounded"
              placeholder="Y"
              value={position.y}
              onChange={(e) => setPosition({ ...position, y: parseFloat(e.target.value) })}
            />
            <input
              type="number"
              className="p-2 bg-gray-700 rounded"
              placeholder="Z"
              value={position.z}
              onChange={(e) => setPosition({ ...position, z: parseFloat(e.target.value) })}
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <input
              type="number"
              className="p-2 bg-gray-700 rounded"
              placeholder="X"
              value={orientation.x}
              onChange={(e) => setOrientation({ ...orientation, x: parseFloat(e.target.value) })}
            />
            <input
              type="number"
              className="p-2 bg-gray-700 rounded"
              placeholder="Y"
              value={orientation.y}
              onChange={(e) => setOrientation({ ...orientation, y: parseFloat(e.target.value) })}
            />
            <input
              type="number"
              className="p-2 bg-gray-700 rounded"
              placeholder="Z"
              value={orientation.z}
              onChange={(e) => setOrientation({ ...orientation, z: parseFloat(e.target.value) })}
            />
          </div>
          <input
            type="number"
            className="w-full p-2 bg-gray-700 rounded mt-4"
            placeholder="Size"
            value={size}
            onChange={(e) => setSize(parseFloat(e.target.value))}
          />
        </div>
      </div>

      {/* Preview Dashboard */}
      <div className="mt-8 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Preview Dashboard</h2>
        <div className="w-full h-64 bg-gray-700 rounded flex items-center justify-center">
          <p className="text-gray-400">3D Avatar Preview</p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
          onClick={handleSaveProgress}
        >
          Save Progress
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
          onClick={handleTestAvatar}
        >
          Test Avatar
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded"
          onClick={handleGenerateQrCode}
        >
          Generate QR Code
        </button>
      </div>

      {/* QR Code Display */}
      {qrCode && (
        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">QR Code</h2>
          <div className="w-64 h-64 bg-gray-700 rounded flex items-center justify-center">
            <p className="text-gray-400">QR Code Placeholder</p>
          </div>
          <a
            href={qrCode}
            download="qr-code.png"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
          >
            Download QR Code
          </a>
        </div>
      )}
    </div>
  );
};

export default App;