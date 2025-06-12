import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {


    return (
        <div>
            
            {/* navber */}
            <div className=''>

            </div>

            <div className=''>
                <Outlet />
            </div>

            {/* footer */}
            <div className=''>

            </div>


        </div>
    );
};

export default MainLayouts;