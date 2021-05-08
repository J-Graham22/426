import React from 'react';

const ButtonComponent = (props: {url: string; text: string}) => {
    return (
        <footer className="align-center">
            <a href={props.url} className="button alt" target="_blank">{props.text}</a>
        </footer>
    )
}

export default ButtonComponent