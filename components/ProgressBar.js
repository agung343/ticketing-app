

export default function ProgressBar({progress}) {
    return(<>
        <div className="bg-gray-200 rounded-full h-2.5 w-full">
            <div className="bg-blue-400 rounded-full h-2.5" style={{
                width: `${progress}%`
            }}>

            </div>
        </div>
    </>)
}