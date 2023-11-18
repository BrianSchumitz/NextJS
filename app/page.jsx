"use client"
import CountButton from "./CountButton/CountButton"

export default function Page() {
    return <div>
        
        <CountButton name={"+1"} mult={1} color={"darkblue"}/>
        <CountButton name={"+2"} mult={2} color={"teal"}/>
        <hr />
        <a href="https://github.com/BrianSchumitz/NextJS">Github Repository for this assignment</a>
        <hr />
        <p>Search Bar</p>

    </div>
}