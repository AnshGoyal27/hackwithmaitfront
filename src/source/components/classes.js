import '../utils/css/class.css'

export const Classes=({cname})=>{

    

    return(
        <div className="text-center" id='class'>
            {/* <button className="btn btn-primary" style={{'width':'100%','height':'20%'}}>{cname}</button> */}
            <h3 className="text-center" style={{
                'marginBottom':'0px',
                'margin':'auto',
        }}>{cname}</h3>
        </div>
    )
}