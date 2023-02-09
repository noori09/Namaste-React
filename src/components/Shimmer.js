const Shimmer = () => {
    return (
        <div className='flex flex-wrap'>
            {Array(15)
                .fill("")
                .map((e,index) => (
                    <div key={index} className="w-60 h-60 p-5 m-5 shadow-lg bg-gray-200">
                    </div>
                ))}
        </div>
    )
}

export default Shimmer
