function HelloProps2(props){
    
    // 구조분해 props (name/age)
    const {name, age} = props


    return(
        <div>
           HelloProps2.jsx Area props = {name} / {age}
        </div>

    )
}

export default HelloProps2;

