import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResidentsPost = ({ residents }) => {

    const [ post, setPost ] = useState({});

    useEffect(() => {
        axios.get(residents)
            .then( response => setPost( response.data ));
    }, []);
    
    return (
        <div className="ResidentsContainer">
            <div className="ResidentsTitle">
                <p>{post.name}</p>
            </div>
            <div className="ResidentsImage"></div>
            <img src={post.image} alt={post.name} />
            <div className="ResidentsInfo">
                {
                    post.status == "Dead" ? (
                        <p><FontAwesomeIcon icon={faCircle} color="red"/> {post.status} - {post.species}</p>
                    ) : (
                        <p><FontAwesomeIcon icon={faCircle} color="green"/> {post.status} - {post.species}</p>
                    )
                }
                <p><strong>Origin:</strong> {post.origin?.name}</p>
                <p><strong>Episodes:</strong> {post.episode?.map( data => data.slice(40, ).concat(" "))} </p>
            </div>
        </div>
    );
};

export default ResidentsPost;