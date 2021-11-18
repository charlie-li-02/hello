import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import oo1 from './pages/images/gundamImages/001.jpg';
import oo2 from './pages/images/gundamImages/002.jpg';
import oo3 from './pages/images/gundamImages/003.jpg';
import oo4 from './pages/images/gundamImages/004.jpg';
import exiaava1 from './pages/images/gundamImages/exiaava1.jpg';
import exiaava2 from './pages/images/gundamImages/exiaava2.jpg';
import exiaava3 from './pages/images/gundamImages/exiaava3.jpg';
import qant1 from './pages/images/gundamImages/qant1.jpg';
import qant2 from './pages/images/gundamImages/qant2.jpg';
import qant3 from './pages/images/gundamImages/qant3.jpg';
import mgnu1 from './pages/images/gundamImages/mgnu1.jpg';
import mgnu2 from './pages/images/gundamImages/mgnu2.jpg';
import mghinuhws1 from './pages/images/gundamImages/mghinuhws1.jpg';
import mghinuhws2 from './pages/images/gundamImages/mghinuhws2.jpg';
import wing1 from './pages/images/gundamImages/wing1.jpg';
import wing2 from './pages/images/gundamImages/wing2.jpg';
import dynames1 from './pages/images/gundamImages/dynames1.jpg';
import dynames2 from './pages/images/gundamImages/dynames2.jpg';
import dynames3 from './pages/images/gundamImages/dynames3.jpg';
import kyrios1 from './pages/images/gundamImages/kyrios1.jpg';
import kyrios2 from './pages/images/gundamImages/kyrios2.jpg';
import kyrios3 from './pages/images/gundamImages/kyrios3.jpg';

export default function GundamImageListTop() {
    return (
        <Box sx={{ width: 1800, height: 700, overflowY: "scroll"}}>
            <ImageList variant="masonry" cols={6} gap={4}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    {
        img: exiaava1,
        title: 'exiaava1',
    },
    {
        img: exiaava3,
        title: 'exiaava3',
    },
    {
        img: exiaava2,
        title: 'exiaava2',
    },
    {
        img: mgnu1,
        title: 'mgnu1',
    },
    {
        img: mgnu2,
        title: 'mgnu2',
    },
    {
        img: oo4,
        title: 'oo4',
    },
    {
        img: oo1,
        title: 'oo1',
    },
    {
        img: mghinuhws1,
        title: 'mghinuhws1',
    },
    {
        img: oo3,
        title: 'oo3',
    },
    {
        img: mghinuhws2,
        title: 'mghinuhws2',
    },
    {
        img: oo2,
        title: 'oo2',
    },
    {
        img: wing2,
        title: 'wing2',
    },
    {
        img: wing1,
        title: 'wing1',
    },
    {
        img: qant3,
        title: 'qant3',
    },    {
        img: qant2,
        title: 'qant2',
    },
    {
        img: qant1,
        title: 'qant1',
    },

];