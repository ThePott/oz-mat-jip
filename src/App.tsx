const SomeBox = () => {
    const pBig = "pt-6"
    const pNone = "pt-0"
    return (
        <div className={`w-[200px] h-[200px] border-1 border-dimdim rounded-md pt-3 ${pBig} ${pNone} p-6`}>some box</div>
    )
}

const App = () => {
    return (
        <div className="w-full h-full">
            random page
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
            <SomeBox />
        </div>
    )
}
export default App
