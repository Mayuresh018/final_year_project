import React from 'react';
import { QrReader } from 'react-qr-reader';

const QrScanner = ({ passData }) => {
  return (
    <QrReader
      constraints={{ facingMode: 'environment' }}
      onResult={(result, error) => {
        if (!!result) {
          const text = result?.text;
          console.info('Scanned Data:', text);
          passData(text);
        }

        // Optional: handle or log errors
        if (!!error) {
          console.warn('QR scan error:', error);
        }
      }}
      style={{ width: '100%' }}
    />
  );
};

export default QrScanner;
