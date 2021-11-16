import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import * as Look from "./pages/Look";
import {MuiThemeProvider} from "@material-ui/core";
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";

const images = [
    {
        url: './pages/images/black.png',
        title: 'HELLO',
        width: '100%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 400,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 1,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            color: "#ffffff",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            textDecorationThickness: "3px"
        },
    },
    "& .MuiTouchRipple-child":{
        backgroundColor: "#ffffff",
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 50%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 100,
    backgroundColor: theme.palette.common.black,
    position: 'absolute',
    bottom: 100,
    left: 'calc(50% - 45px)',
    transition: theme.transitions.create('opacity'),
}));

function HelloImageButton(props) {
    const {onClick} = props;
    const classes = Look.styles();
    return (
        <MuiThemeProvider theme={Look.theme}>
            <Box sx={{ '&:hover': {
                    backgroundColor: 'black',
                    opacity: 1,
                },}}>
                <Container maxWidth={"md"}>
                {images.map((image) => (
                    <Stack direction={"column"} style={{ justifyContent: "flex-end"}}>
                    <ImageButton
                        focusRipple
                        className={classes.wrapper}
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                        onClick={onClick}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography component="span" variant="h2" color="black" style={{fontSize: "100px"}}>
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" color="black" />
                            </Typography>
                        </Image>
                    </ImageButton>
                        <Typography variant="h5" id="helloText" className={classes.homePageSubHeading} color="black" style={{ marginTop: "100px"}}>
                            My name is Charlie, nice to meet you :D
                        </Typography>
                    </Stack>
                ))}
                </Container>
            </Box>
        </MuiThemeProvider>
    );
}

export default HelloImageButton