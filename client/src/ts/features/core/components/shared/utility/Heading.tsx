import { CSSProperties } from "React"
import Typography from "@mui/material/Typography"

interface Props {
    title: string
    children?: JSX.Element | JSX.Element[] | never[]
    style?: CSSProperties
}

export const Heading = (props: Props): JSX.Element => {
    const { title, children } = props || {}

    const style = props?.style ?? {}

    if (!title) {
        return null
    }
    return (

        <div className="row" style={style}>
            <div className="col">
                <div className="d-flex justify-content-between">
                    <Typography variant="h4" gutterBottom component="div">
                        {props.title}
                    </Typography>
                    <div className="row">
                        <div className="col">
                            <div className="h-100 d-flex align-items-end justify-content-center">
                                {children && children}
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mb-5" />
            </div>
        </div>
    )
}

// const idk_what_i_was_going_for_here = (props: Props): JSX.Element => {
//     const { title, children } = props || {}
//
//     const style = props?.style ?? {}
//
//     if (!title) {
//         return null
//     }
//     return (
//         <>
//             {/* <Box
//                 sx={{
//                     flexGrow: 1,
//                     // display: "flex",
//                     // width: "100%",
//                     // alignItems: "center",
//                     // justifyContent: "center",
//                     // bgcolor: "background.default",
//                     // color: "text.primary",
//                     // borderRadius: 1,
//                     // p: 3,
//                 }}
//             > */}
//             {/* <Grid container spacing={2}>
//                     <Grid item xs={8}>
//                         <Typography variant="h4" gutterBottom component="div">
//                             {props.title}
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <div className="h-100 d-flex align-items-end justify-content-center">
//                             {children && children}
//                         </div>
//                     </Grid>
//                 </Grid> */}
//             <div className="row" style={style}>
//                 <div className="col">
//                     <div className="d-flex justify-content-between">
//                         <Typography variant="h4" gutterBottom component="div">
//                             {props.title}
//                         </Typography>
//                         <div className="row">
//                             <div className="col">
//                                 <div className="h-100 d-flex align-items-end justify-content-center">
//                                     {children && children}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <hr className="mb-5" />
//                 </div>
//             </div>
//             {/* </Box> */}
//         </>
//     )
// }
