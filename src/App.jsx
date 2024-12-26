import React, { useState } from 'react';
    import QRCode from 'qrcode.react';
    import PreviewDashboard from './PreviewDashboard';
    import './index.css';

    function App() {
      const [glbFile, setGlbFile] = useState(null);
      const [pdfFile, setPdfFile] = useState(null);
      const [voiceFile, setVoiceFile] = useState(null);
      const [script, setScript] = useState('');
      const [animation, setAnimation] = useState('Idle');
      const [qrCodeValue, setQrCodeValue] = useState('');
      const [gpsLocation, setGpsLocation] = useState({ latitude: '', longitude: '' });
      const [photoFile, setPhotoFile] = useState(null);
      const [characterSettings, setCharacterSettings] = useState({
        position: { x: 0, y: 0, z: 0 },
        orientation: { x: 0, y: 0, z: 0 },
        size: 1,
      });

      const handleGlbUpload = (event) => {
        setGlbFile(event.target.files[0]);
      };

      const handlePdfUpload = (event) => {
        setPdfFile(event.target.files[0]);
      };

      const handleVoiceUpload = (event) => {
        setVoiceFile(event.target.files[0]);
      };

      const handleScriptChange = (event) => {
        setScript(event.target.value);
      };

      const handleAnimationChange = (event) => {
        setAnimation(event.target.value);
      };

      const handleGpsChange = (event) => {
        const { name, value } = event.target;
        setGpsLocation((prev) => ({ ...prev, [name]: value }));
      };

      const handlePhotoUpload = (event) => {
        setPhotoFile(event.target.files[0]);
      };

      const handleCharacterSettingsChange = (event) => {
        const { name, value } = event.target;
        const [key, subKey] = name.split('.');
        setCharacterSettings((prev) => ({
          ...prev,
          [key]: {
            ...prev[key],
            [subKey]: parseFloat(value),
          },
        }));
      };

      const generateQrCode = () => {
        setQrCodeValue('https://example.com/character/' + Date.now());
      };

      return (
        <div style={{ padding: '20px', maxHeight: '100vh', overflowY: 'auto' }}>
          <h1>Welcome to Holoport XR</h1>
          <div style={{ marginBottom: '20px' }}>
            <h2>Import Your Avatar</h2>
            <input type="file" accept=".glb" onChange={handleGlbUpload} />
            {glbFile && <p>Uploaded: {glbFile.name}</p>}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2>Upload AI Knowledge Base</h2>
            <input type="file" accept=".pdf" onChange={handlePdfUpload} />
            {pdfFile && <p>Uploaded: {pdfFile.name}</p>}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2>Voice Recording</h2>
            <input type="file" accept="audio/*" onChange={handleVoiceUpload} />
            {voiceFile && <p>Uploaded: {voiceFile.name}</p>}
            <p>Voice cloning feature coming soon...</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2>Script Input</h2>
            <textarea
              rows="4"
              cols="50"
              value={script}
              onChange={handleScriptChange}
              placeholder="Enter your script here..."
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2>Select Animation</h2>
            <select value={animation} onChange={handleAnimationChange}>
              <option value="Idle">Idle</option>
              <option value="Walking">Walking</option>
              <option value="Running">Running</option>
              <option value="Dancing">Dancing</option>
            </select>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2>QR Code for Sharing</h2>
            <button onClick={generateQrCode}>Generate QR Code</button>
            {qrCodeValue && <QRCode value={qrCodeValue} />}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2>Set GPS Location</h2>
            <input
              type="text"
              name="latitude"
              value={gpsLocation.latitude}
              onChange={handleGpsChange}
              placeholder="Latitude"
            />
            <input
              type="text"
              name="longitude"
              value={gpsLocation.longitude}
              onChange={handleGpsChange}
              placeholder="Longitude"
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2>Upload Photo for Vision Positioning</h2>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
            {photoFile && <p>Uploaded: {photoFile.name}</p>}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2>Character Settings</h2>
            <label>
              Position X:
              <input
                type="number"
                name="position.x"
                value={characterSettings.position.x}
                onChange={handleCharacterSettingsChange}
              />
            </label>
            <label>
              Position Y:
              <input
                type="number"
                name="position.y"
                value={characterSettings.position.y}
                onChange={handleCharacterSettingsChange}
              />
            </label>
            <label>
              Position Z:
              <input
                type="number"
                name="position.z"
                value={characterSettings.position.z}
                onChange={handleCharacterSettingsChange}
              />
            </label>
            <label>
              Orientation X:
              <input
                type="number"
                name="orientation.x"
                value={characterSettings.orientation.x}
                onChange={handleCharacterSettingsChange}
              />
            </label>
            <label>
              Orientation Y:
              <input
                type="number"
                name="orientation.y"
                value={characterSettings.orientation.y}
                onChange={handleCharacterSettingsChange}
              />
            </label>
            <label>
              Orientation Z:
              <input
                type="number"
                name="orientation.z"
                value={characterSettings.orientation.z}
                onChange={handleCharacterSettingsChange}
              />
            </label>
            <label>
              Size:
              <input
                type="number"
                name="size"
                value={characterSettings.size}
                onChange={handleCharacterSettingsChange}
                step="0.1"
              />
            </label>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2>Preview Dashboard</h2>
            <PreviewDashboard characterSettings={characterSettings} />
          </div>
        </div>
      );
    }

    export default App;
