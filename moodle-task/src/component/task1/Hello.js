import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import cts from '../task1/Congrats.png';
import log from '../task1/Login.png';
import pds from '../task1/Products.png';
import Leg from '../task1/League.png';
import not from '../task1/Notifications.png';
import soci from '../task1/Social.png';
import tec from '../task1/Technology.png';
import date from '../task1/Datefunction.png';

import frts from '../task1/Fruits.png';
import hks from '../task1/Hooks.png';

export function Hello()
{
    
    return (

        <>
            <h1 class="text-secondary text-center">Hello welcome to my Works</h1>

            <div class="col-lg-10 container-fluid">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                        <div class="col">
                            <div class="card"><img src={soci} class="img-fluid" alt="..."/></div>
                        </div>
                        <div class="col">
                            <div class="card"> <img src={not} class="img-fluid" alt="..."/></div>
                        </div>
                        <div class="col">
                            <div class="card"><img src={frts} class="img-fluid" alt="..."/></div>
                        </div>
                        <div class="col">
                            <div class="card"><img src={log} class="img-fluid" alt="..."/></div>
                        </div>
                    </div>
             </div>

            
        </>
    );
}