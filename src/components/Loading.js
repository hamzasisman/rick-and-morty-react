
const Loading = () => {

    return (
        <div className="flex gap-2 w-full items-center justify-center h-[100px]">
            <div className="inline-block h-4 w-4 animate-spin rounded-full border-[3px] border-solid border-current border-r-transparent align-[-0.25em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p>
                Loading...
            </p>
        </div>
    )
}

export default Loading