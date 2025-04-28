import { Box, Paper, Avatar, Typography, Button } from '@mui/material';
import bgImg from '../../img/bg1.png';
import { useNavigate } from 'react-router-dom';

const FakeProduct = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-2)
    }

    return (
        <Box sx={{
        backgroundImage: `url(${bgImg})`,
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: "100%", // Makes image 80% of its original size
        backgroundPosition: "center", // Centers image
        zIndex: 1,
        overflowY: "scroll",
        }}>

            <Paper elevation={3} sx={{ width: "400px", margin: "auto", marginTop: "10%", marginBottom: "10%", padding: "3%", backdropFilter:"blur(4px)", backgroundColor: "rgba(255,255,255,0.9)" }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Montserrat",
                        textAlign: "center", marginBottom: "5%", marginTop: "5%", 
                    }}    
                >
                    Product Authentication Failed
                </Typography>
                <Typography
                variant="h5"
                sx={{
                    fontFamily: "Montserrat",
                    textAlign: "center", marginBottom: "5%", marginTop: "5%", 
                }}   >
                    We're sorry to inform you that the product you scanned is not authentic. It appears to be a counterfeit.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "Montserrat",
                        textAlign: "center", marginBottom: "5%", marginTop: "5%", 
                    }}    
                >
                    We take counterfeiting very seriously, and we are working to prevent it from happening. We advise you not to use this product, as it may not meet the safety and quality standards of the genuine product. If you have any concerns or questions, please contact the manufacturer of the genuine product for further assistance.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "Montserrat",
                        textAlign: "center", marginBottom: "5%", marginTop: "5%", 
                    }}    
                >
                    Thank you for using our anti-counterfeit system. We hope it has helped you make informed purchasing decisions and protected you from counterfeit products.
                </Typography>


                

                <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >


                        <Button
                            onClick={handleBack}
                            sx={{
                                marginTop: "5%",
                            }}
                        >
                            Back
                        </Button>

                    </Box>    
 
            </Paper>
        </Box>


    
    )
}

export default FakeProduct;