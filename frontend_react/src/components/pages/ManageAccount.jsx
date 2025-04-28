import { Box, Paper, Typography } from '@mui/material';
import bgImg from '../../img/bgmain.png';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const columns = [
    { field: 'name', headerName: 'Name', width: 120, editable: true },
    {
        field: 'description',
        headerName: 'Description',
        width: 300,
        editable: true
    },
    { field: 'username', headerName: 'Username', width: 130, editable: true },
    { field: 'website', headerName: 'Website', width: 200, editable: true },
    { field: 'location', headerName: 'Location', width: 200, editable: true },
    { field: 'role', headerName: 'Role', width: 130, editable: true },
    { field: 'image', headerName: 'Image', width: 130 }

];

const ManageAccount = () => {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        handleData();
    }, []);

    const handleData = async (e) => {
        const res = await axios.get('http://localhost:5000/profileAll')
            .then(res => {
                console.log(JSON.stringify(res.data));
                setRows(res.data);
            })
    }

    const handleBack = () => {
        navigate(-1)
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
            <Paper elevation={3} sx={{ width: "80%", margin: "auto", height: "530px", marginTop: "5%", marginBottom: "5%", padding: "3%", backgroundColor: " rgba(91, 167, 225, 0.76);" }}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "center", marginBottom: "3%",
                        fontFamily: 'Gambetta', fontWeight: "bold", fontSize: "2.5rem"
                    }}
                >
                    Manage Account
                </Typography>
                <Paper sx={{ height: 400, width: '100%', backgroundColor: "rgba(255,255,255,0.9)"}}>
                {console.log("Rows being passed to DataGrid:", rows)}
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    sx={{
                        "& .MuiDataGrid-columnHeaderTitle": { fontSize: "16px", fontWeight: "bold" }, // Column header text
                        "& .MuiDataGrid-cell": { fontSize: "15px" }, // Row cell text
                        "& .MuiTablePagination-root": { fontSize: "12px" } // Pagination text
                    }}
                />

                </Paper>
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
                                marginTop: "3%",
                                color: "black",
                                fontSize: "15px",
                                fontWeight: "bold",

                          
                            }}
                        >
                            Back
                        </Button>

                    </Box>
            </Paper>
        </Box>
    );
}



export default ManageAccount;
