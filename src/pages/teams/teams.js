import React from 'react';



import img3 from '../../assets/team1.jpg';
import img1 from '../../assets/team3.png'
import img2 from '../../assets/team5.png';
import img4 from '../../assets/team6.png';
import img5 from '../../assets/team4.png';
import img6 from '../../assets/team7.png';
class Teams extends React.Component {
    render() {
        return (
            <div><h1>Our team</h1>
                <div className="container">
                    <img src={img3}   width={800} height={400}/>
                    <img src={img1} width={600} height={400} />
                    <img src={img2} width={400} height={400} />
                    <img src={img4} width={400} height={400}/>
                    <img src={img5} width={400} height={400} />
                    <img src={img6} width={400} height={400} />
                </div>
            </div>
        );
    }
}

export default Teams;
