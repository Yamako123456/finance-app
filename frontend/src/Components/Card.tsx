import React from 'react'

type Props = {}

const Card = (props: Props) => {
    return <div className="card">
        <img
            src='https://plus.unsplash.com/premium_photo-1680404114169-e254afa55a16?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='image'
        />
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>

        </div>
        <p className='info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi dolorum vitae repellendus, nemo reprehenderit magnam. Maiores reprehenderit dolores blanditiis!
            s</p>
    </div>;

};

export default Card