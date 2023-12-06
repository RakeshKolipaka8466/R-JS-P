import './button.css';
export function Button(){
    return(
        <div>
            <button>Submit</button>
        </div>
    )
}
export function Summary(){
    return(
        <div>
            <h3>this is summary</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tenetur 
            ratione commodi perspiciatis porro inventore ullam aspernatur, explicabo neque
            reiciendis, cumque accusantium dicta saepe similique mollitia, aliquam voluptatum
            voluptatem error!</p>
            <h4>small summary</h4>
        </div>
    )
}

export function Input(){
    return(
        <div>
        <input type='text'/>
        <Button />
        </div>
    )
}
//export default Button;