import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import dynames1 from './pages/images/gundamImages/dynames1.jpg';
import dynames2 from './pages/images/gundamImages/dynames2.jpg';
import dynames3 from './pages/images/gundamImages/dynames3.jpg';
import kyrios1 from './pages/images/gundamImages/kyrios1.jpg';
import kyrios2 from './pages/images/gundamImages/kyrios2.jpg';
import unicorn1 from './pages/images/gundamImages/unicorn1.jpg';
import unicorn2 from './pages/images/gundamImages/unicorn2.jpg';
import unicorn3 from './pages/images/gundamImages/unicorn3.jpg';
import unicorn4 from './pages/images/gundamImages/unicorn4.jpg';
import unicornfa1 from './pages/images/gundamImages/unicornfa1.jpg';
import unicornfa2 from './pages/images/gundamImages/unicornfa2.jpg';
import unicornfa3 from './pages/images/gundamImages/unicornfa3.jpg';
import unicornfa4 from './pages/images/gundamImages/unicornfa4.jpg';
import banshee1 from './pages/images/gundamImages/banshee1.jpg';
import banshee2 from './pages/images/gundamImages/banshee2.jpg';
import banshee3 from './pages/images/gundamImages/banshee3.jpg';
import banshee4 from './pages/images/gundamImages/banshee4.jpg';
import bansheefb1 from './pages/images/gundamImages/bansheefb1.jpg';
import bansheefb2 from './pages/images/gundamImages/bansheefb2.jpg';
import bansheefb3 from './pages/images/gundamImages/bansheefb3.jpg';
import bansheefb4 from './pages/images/gundamImages/bansheefb4.jpg';
import perfect1 from './pages/images/gundamImages/perfect1.jpg';
import perfect2 from './pages/images/gundamImages/perfect2.jpg';
import perfect3 from './pages/images/gundamImages/perfect3.jpg';
import perfect4 from './pages/images/gundamImages/perfect4.jpg';
import phenex1 from './pages/images/gundamImages/phenex1.jpg';
import phenex2 from './pages/images/gundamImages/phenex2.jpg';
import phenex3 from './pages/images/gundamImages/phenex3.jpg';
import phenex4 from './pages/images/gundamImages/phenex4.jpg';
import nu1 from './pages/images/gundamImages/nu1.jpg';
import nu2 from './pages/images/gundamImages/nu2.jpg';
import nu3 from './pages/images/gundamImages/nu3.jpg';
import nu4 from './pages/images/gundamImages/nu4.jpg';
import nuhws1 from './pages/images/gundamImages/nuhws1.jpg';
import nuhws2 from './pages/images/gundamImages/nuhws2.jpg';
import nuhws3 from './pages/images/gundamImages/nuhws3.jpg';
import nuhws4 from './pages/images/gundamImages/nuhws4.jpg';
import sazabi1 from './pages/images/gundamImages/sazabi1.jpg';
import sazabi2 from './pages/images/gundamImages/sazabi2.jpg';
import sazabi3 from './pages/images/gundamImages/sazabi3.jpg';
import sazabi4 from './pages/images/gundamImages/sazabi4.jpg';
import sazabi5 from './pages/images/gundamImages/sazabi5.jpg';

export default function GundamImageListBottom() {
    return (
        <Box sx={{ width: "90vmax", height: "30vmax", overflowY: "scroll"}}>
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
        img: dynames3,
        title: 'dynames3',
    },
    {
        img: dynames2,
        title: 'dynames2',
    },
    {
        img: dynames1,
        title: 'dynames1',
    },
    {
        img: unicorn4,
        title: 'unicorn4',
    },
    {
        img: unicorn1,
        title: 'unicorn1',
    },
    {
        img: unicorn2,
        title: 'unicorn2',
    },
    {
        img: unicorn3,
        title: 'unicorn3',
    },
    {
        img: unicornfa2,
        title: 'unicornfa2',
    },
    {
        img: kyrios2,
        title: 'kyrios2',
    },
    {
        img: kyrios1,
        title: 'kyrios1',
    },
    {
        img: unicornfa4,
        title: 'unicornfa4',
    },
    {
        img: unicornfa3,
        title: 'unicornfa3',
    },
    {
        img: unicornfa1,
        title: 'unicornfa1',
    },
    {
        img: banshee1,
        title: 'banshee1',
    },
    {
        img: banshee2,
        title: 'banshee2',
    },
    {
        img: banshee3,
        title: 'banshee3',
    },
    {
        img: banshee4,
        title: 'banshee4',
    },
    {
        img: bansheefb4,
        title: 'bansheefb4',
    },
    {
        img: bansheefb3,
        title: 'bansheefb3',
    },
    {
        img: bansheefb2,
        title: 'bansheefb2',
    },
    {
        img: bansheefb1,
        title: 'bansheefb1',
    },
    {
        img: phenex3,
        title: 'phenex3',
    },
    {
        img: phenex4,
        title: 'phenex4',
    },
    {
        img: phenex1,
        title: 'phenex1',
    },
    {
        img: phenex2,
        title: 'phenex2',
    },
    {
        img: nu1,
        title: 'nu1',
    },
    {
        img: nu4,
        title: 'nu4',
    },
    {
        img: nu3,
        title: 'nu3',
    },
    {
        img: perfect1,
        title: 'perfect1',
    },
    {
        img: perfect4,
        title: 'perfect4',
    },
    {
        img: perfect2,
        title: 'perfect2',
    },
    {
        img: perfect3,
        title: 'perfect3',
    },
    {
        img: nu2,
        title: 'nu2',
    },
    {
        img: nuhws1,
        title: 'nuhws1',
    },
    {
        img: nuhws2,
        title: 'nuhws2',
    },
    {
        img: nuhws3,
        title: 'nuhws3',
    },
    {
        img: nuhws4,
        title: 'nuhws4',
    },
    {
        img: sazabi1,
        title: 'sazabi1',
    },
    {
        img: sazabi4,
        title: 'sazabi4',
    },
    {
        img: sazabi2,
        title: 'sazabi2',
    },
    {
        img: sazabi3,
        title: 'sazabi3',
    },
    {
        img: sazabi5,
        title: 'sazabi5',
    },

];