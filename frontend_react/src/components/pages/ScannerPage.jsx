import { Box, Paper, Typography, Button } from '@mui/material';
import bgImg from '../../img/bgmain.png';
import QrScanner from '../QrScanner';
import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ScannerPage = () => {
  const CONTRACT_ADDRESS = '0x62081f016446585cCC507528cc785980296b4Ccd';
  const [qrData, setQrData] = useState('');
  const { auth } = useAuth();
  const navigate = useNavigate();

  const passData = (data) => {
    setQrData(data);
  };

  useEffect(() => {
    if (!qrData) return;

    console.log("QR Data Received:", qrData);
    const arr = qrData.split(',');
    const contractAddress = arr[0];

    if (contractAddress) {
      if (contractAddress === CONTRACT_ADDRESS) {
        if (auth.role === "supplier" || auth.role === "retailer") {
          navigate('/update-product', { state: { qrData } });
        } else {
          navigate('/authentic-product', { state: { qrData } });
        }
      } else {
        navigate('/fake-product');
      }
    }
  }, [qrData, auth, navigate]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "80vh",
        backgroundRepeat: "no-repeat",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        zIndex: -2,
        overflowY: "scroll"
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "400px",
          margin: "auto",
          marginTop: "10%",
          marginBottom: "10%",
          padding: "3%",
          backgroundColor: "#e3eefc"
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "5%" }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              marginBottom: "3%",
              fontFamily: 'Gambetta',
              fontWeight: "bold",
              fontSize: "2.5rem"
            }}
          >
            Scan QR Code
          </Typography>

          <QrScanner passData={passData} />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={handleBack}
              sx={{
                marginTop: "3%",
                color: "black",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ScannerPage;
