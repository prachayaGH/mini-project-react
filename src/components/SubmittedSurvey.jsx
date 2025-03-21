export function SubmittedSurvey({ inputName, inputEmail, selectMovie, inputFeedback, handleReset }) {
    return (
        <div>
            <div className="p-6 bg-green-50 border border-green-300 rounded-lg">
                <h2 className="text-green-700 text-lg flex items-center">
                    ✅ ส่งแบบสำรวจสำเร็จ!
                </h2>
                <div className="flex gap-14">
                    <div className="mt-4 flex flex-col gap-2">
                        <p className="text-gray-500">ชื่อ:</p>
                        <p className="text-gray-500">อีเมล:</p>
                        <p className="text-gray-500">หนังที่เลือก:</p>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <p>{inputName}</p>
                        <p>{inputEmail}</p>
                        <p className="text-purple-700">{selectMovie}</p>
                    </div>
                </div>
                <hr className="my-5"/>
                <p className="text-gray-500">ความคิดเห็น:</p>
                <div className="w-full mt-2 p-3 rounded-md bg-gray-100">{inputFeedback}</div>
            </div>
            <button
                className="mt-4 px-4 py-2 bg-black text-white rounded-md flex items-center justify-center w-full cursor-pointer"
                onClick={handleReset}
            >
                🔄 ทำแบบสำรวจใหม่
            </button>
        </div>
    );
}