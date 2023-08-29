import React from 'react';
import Layout from "../Layout";

const NotFound = () => {
    return(
        <Layout>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column",
                height:"80vh",
            }}>
                <h1
                    style={{
                        fontSize:'100px',
                        fontWeight: 'bold',
                        color: '#fff'
                    }}
                >
                    404
                </h1>
                <h2
                style={{
                    fontSize: '50px',
                    fontWeight:'bold',
                    color:'#fff'
                }}
                >Page not found</h2>
            </div>
        </Layout>
    )
}

export default NotFound;