const H5 = ({ children, ...rest }) => {
    return(
       <center>
            <h5 { ...rest }>{ children }</h5>
       </center>
    );
}

export default H5;