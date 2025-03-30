export default function SkeletonCard() {
    return (
        <div className="shadow-md rounded-2xl w-72 h-96 bg-white p-4 flex flex-col gap-3 border border-gray-300 hover:shadow-lg transition-all relative animate-pulse">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="w-32 h-4 bg-gray-300 rounded"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            </div>

            {/* Content Area */}
            <div className="flex-grow flex items-center justify-center overflow-hidden rounded-xl bg-gray-200 p-3 w-full h-52">
                <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
            </div>

            {/* Footer Placeholder */}
            <div className="flex flex-col gap-2">
                <div className="w-full h-4 bg-gray-300 rounded"></div>
                <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
}
