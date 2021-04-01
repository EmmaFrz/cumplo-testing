const P = ({ children, ...rest }) => {
    return(
        <p { ...rest }>
            { children }
        </p>
    );
}

export default P;