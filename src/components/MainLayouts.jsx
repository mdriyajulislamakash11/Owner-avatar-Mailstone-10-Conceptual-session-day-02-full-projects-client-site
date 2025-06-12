import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Navber';

const MainLayouts = () => {


    return (
        <div>
            
            {/* navber */}
            <div className=''>
                <Navber />
            </div>

            <div className='w-11/12 mx-auto my-7'>
                <Outlet />
            </div>

            {/* footer */}
            <div className=''>

            </div>


        </div>
    );
};

export default MainLayouts;