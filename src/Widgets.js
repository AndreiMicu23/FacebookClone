import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className='widgets'>
            <iframe
                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
                width='340'
                height='100%'
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling='no'
                frameBorder='0'
                allowTransparency='true'
                allow='encrypted-media'
                title='iframeExample'
            >
            </iframe>
            {/* <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="300"
                height="200"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
            </iframe> */}
        </div>
    )
}

export default Widgets;