import React from 'react';
import "./Region.css";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'
import { styled } from '@material-ui/core';
import { useState } from 'react';
import { Style } from '@material-ui/icons';
function Region() {
    const mystyle = {
        borderRadius: "12px",
        border: "1px solid #f84464",
        backgroundColor: "#f84464",
        color: "#fff"
    };



    return (
        <div>
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-6 region">
                        <h6>Online Tickets → Cinema List</h6>
                        <h5>Region-wise Cinema List</h5>
                    </div>
                </div>
            </div>

            <div className="cinema-filters">
                <ul className="filters">
                    <li className="f_all">All</li>
                    <li className="f_0-9">0-9</li>
                    <li className="f_a">A</li>
                    <li className="f_b">B</li>
                    <li className="f_c">C</li>
                    <li className="f_d">D</li>
                    <li className="f_e">E</li>
                    <li className="f_f">F</li>
                    <li className="f_g">G</li>
                    <li className="f_h">H</li>
                    <li className="f_i">I</li>
                    <li className="f_j">J</li>
                    <li className="f_k">K</li>
                    <li className="f_l">L</li>
                    <li className="f_m">M</li>
                    <li className="f_n">N</li>
                    <li className="f_o">O</li>
                    <li className="f_p">P</li>
                    <li className="f_q">Q</li>
                    <li className="f_r">R</li>
                    <li className="f_s">S</li>
                    <li className="f_t">T</li>
                    <li className="f_u">U</li>
                    <li className="f_v">V</li>
                    <li className="f_w">W</li>
                    <li className="f_x">X</li>
                    <li className="f_y">Y</li>
                    <li className="f_z" card>Z</li>
                </ul>
            </div>

            <div className="cinema-card">
                <div className="cinema-card-wrapper">
                    <div className="col-3">
                        <img className="card-img-top" src="/images/cinema1.jpg" alt="" />
                        <div className="card-body">
                            <p className="card-text">Cine Square Cinemas: Bapunagar</p>
                        </div>
                    </div>

                    <div className="col-3">
                        <img className="card-img-top" src="/images/cinema2.jpg" alt="" />
                        <div className="card-body">
                            <p className="card-text">Cinemax: Dev Arc, Ahmedabad</p>
                        </div>
                    </div> &nbsp;&nbsp;&nbsp;

                    <div className="col-3">
                        <img className="card-img-top" src="/images/cinema3.jpg" alt="" />
                        <div className="card-body">
                            <p className="card-text">Cinepolis: Ahmedabad One</p>
                        </div>
                    </div> &nbsp;&nbsp;&nbsp;

                    <div className="col-3">
                        <img className="card-img-top" src="/images/cinema4.jpg" alt="" />
                        <div className="card-body">
                            <p className="card-text">City Gold Satellite: Ahmedabad</p>
                        </div>
                    </div> &nbsp;&nbsp;&nbsp;

                    <div className="col-3">
                        <img className="card-img-top" src="/images/cinema5.jpg" alt="" />
                        <div className="card-body">
                            <p className="card-text">Miraj City Pulse: Ahmedabad</p>
                        </div>
                    </div> &nbsp;&nbsp;&nbsp;
                </div>
            </div>


            <div className="cinema-desc">
                <h5>Sit Back, Relax and Enjoy a Stellar Cinematic Experience at Your Nearest Cinema</h5>
                <h6>Whether watching a classic film or turning out for the first day first show of 
                    Shang-Chi and the Legend of the Ten Rings, there's something special about watching 
                    movies on the big screen. No doubt, Movies are experienced best in the theatres.
                     And, there is no dearth of good cinemas in in Ahmedabad. From PVR: Acropolis, 
                     Ahmedabad to Cinepolis: Ahmedabad One, PVR: Arved Transcube, Ahmedabad to SB Multiplex:
                    Agora Mall, Ahmedabad has it all. These movie theatres in in Ahmedabad always strive to 
                    offer you a life-size cinematic experience.</h6>

                <div className="cinema-card">
                    <div className="cinema">
                        <h5>Your Movie, Your Cinema</h5>
                        <h6>We at BookMyShow understand your love for movies. Providing you an unmatched movie 
                            experience is always our priority. With the list of all the upcoming movies in any 
                            language – Hindi, English, Marathi, Tamil, Telugu, Kannada, Malayalam or even 
                            Genre – Action, Comedy, Thriller, Drama, Romance, Animation or Crime, we offer you 
                            ticketing for all the movies at the nearby thaetres in Ahmedabad. Whether it's a 
                            multiplex or an iconic single screen theatre, you will find it listed at BookMyShow!</h6>
                    </div>
                    <div className="cinema">
                        <h5>Movies Are Best Experienced in the Theatre!</h5>
                        <h6>Nothing can beat the experience of watching a movie in a theatre. It's a different 
                            and a special experience all-together. Having listed more than 100 theatres in your 
                            Ahmedabad, BookMyShow is the ultimate destination for a movie buff to book tickets online. 
                            After all, who understands your love for cinema better than us!</h6>
                    </div>

                    <div className="cinema">
                        <h5>BookMyShow – Your ultimate Entertainment Destination!</h5>
                        <h6>What's more! Along with offering you the ease of booking movie tickets online, 
                            we give you all you need to keep up with the best of movies, while keeping you 
                            entertained. From movie reviews and gossip to which movies to watch, you will 
                            find it all here. You can also catch the trailers and official previews of the 
                            upcoming movies under our new section, Videos and Trailers. So Ahmedabad, 
                            catch movies on the go with BookMyShow!</h6>
                    </div>
                </div>

                <h6>Catch movies at a cinema near you with BookMyShow!!</h6>

            </div>

        </div>
    );
}

export default Region;
