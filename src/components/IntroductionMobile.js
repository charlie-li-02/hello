import { TypeAnimation } from 'react-type-animation';

function Introduction() {

    return (
        <TypeAnimation
            style={{
                whiteSpace: 'pre',
                fontSize: '25px',
                height: '300px',
                width: '300px',
                display: 'block',
                textAlign: 'left',
                marginTop: "4em",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#ffffff"
            }}
            sequence={[
                `initializing components...`,
                1500,
                `creating target object...`,
                1000,
                `charlie: {\n \t"greeting": "hello",\n \t"name": "charlie",\n \t"location": "vancouver",\n}`,
                5000,
                `welcome to charlie's website!`,
                5000
            ]}
            repeat={0}
            omitDeletionAnimation={true}
        />
    );
}

export default Introduction;