import React, { useState } from 'react';
import QrCode from 'react-qr-code';

export default function QrCodeGenerator() {

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    console.log('Current input state:', input);

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('');
    }

    return (
        <div className="qr-code-generator">
            <div>
                <h1>QR Code Generator</h1>
                <input
                    onChange={(e) => {
                        console.log('Input event:', e);
                        console.log('Input value:', e.target.value);
                        setInput(e.target.value);
                    }}
                    value={input}
                    type="text" name=""
                    placeholder="Enter text to generate QR code" />

                <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode} >Generate QR Code</button>
            </div>

            <div>
                <QrCode
                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor="#ffffff"
                />
            </div>
        </div>
    );
}
