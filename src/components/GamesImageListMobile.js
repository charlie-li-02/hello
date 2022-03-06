import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import dota1 from './pages/images/gamesImages/dota1.jpg';
import dota2 from './pages/images/gamesImages/dota2.jpg';
import dota3 from './pages/images/gamesImages/dota3.jpg';
import dota4 from './pages/images/gamesImages/dota4.png';
import dota5 from './pages/images/gamesImages/dota5.jpg';
import dota6 from './pages/images/gamesImages/dota6.jpg';
import dota7 from './pages/images/gamesImages/dota7.jpg';
import dota8 from './pages/images/gamesImages/dota8.png';
import dota9 from './pages/images/gamesImages/dota9.jpg';
import dota10 from './pages/images/gamesImages/dota10.png';
import dota11 from './pages/images/gamesImages/dota11.png';
import dota12 from './pages/images/gamesImages/dota12.png';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function GamesImageListMobile() {
    return (
        <ImageList
            sx={{width: "40vmax", height: "75vmax"}}
            variant="quilted"
            cols={4}
            rowHeight={30}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 60, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: dota1,
        title: 'dota1',
        rows: 6,
        cols: 2,
    },
    {
        img: dota2,
        title: 'dota2',
        rows: 2,
        cols: 2,
    },
    {
        img: dota3,
        title: 'dota3',
        cols: 2,
        rows: 2,
    },
    {
        img: dota10,
        title: 'dota10',
        rows: 4,
        cols: 2
    },
    {
        img: dota6,
        title: 'dota6',
        rows: 4,
        cols: 2,
    },
    {
        img: dota5,
        title: 'dota5',
        cols: 2,
        rows: 2
    },
    {
        img: dota7,
        title: 'dota7',
        rows: 2,
        cols: 2,
    },
    {
        img: dota4,
        title: 'dota4',
        rows: 2,
        cols: 2,
    },
    {
        img: dota9,
        title: 'dota9',
        cols: 2,
        rows: 2,
    },
    {
        img: dota8,
        title: 'dota8',
        rows: 2,
        cols: 2,
    },
    {
        img: dota11,
        title: 'dota11',
        rows: 2,
        cols: 2,
    },
    {
        img: dota12,
        title: 'dota12',
        rows: 2,
        cols: 2,
    },
];