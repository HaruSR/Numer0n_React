import React from "react"
import "./Title.scss"
import { Box } from "@material-ui/core";

// const useStyle = makeStyles({
//     container: {
//         "& Box":{
//             fontSize: "3vw",
//             fontFamily: "sans-serif",
//             transformStyle: "preserve-3d",
//             (()=>{
//                 for(var i; i<8; i++){
//                     "&:nth-child(#{i})":{
//                         animation: "turn 3s infinite",
//                         animationDelay: `${i}*200ms`
//                       }
//                 }
//             })()
            
//         ,
//         width: "5rem",
//         borderRadius: "5px solid black",
//         margin: "0 auto",
//         display: "flex",
//         justifyContent: "space-around",
//         marginTop: "1rem",
//         perspective: "1000px"
//     },

//     "@keyframes turn" :{
//         "0%": {
//           transform: "rotateX(0deg)",
//           transformOrigin: "0 4vw"
//         },
//         "100%": {
//           transform: "rotateX(360deg)",
//           transformOrigin: "0 4vw"
//         }
//     }
// });

const Title = () => {
    // const classes = useStyle();
    return (
        <Box className="container">
            <Box>N</Box>
            <Box>u</Box>
            <Box>m</Box>
            <Box>e</Box>
            <Box>r</Box>
            <Box>0</Box>
            <Box>n</Box>
        </Box>
    )
}

export default Title
