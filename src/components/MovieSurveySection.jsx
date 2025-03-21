import { useState } from "react"
import { OptionalMovies } from "./OptionalMovies"
import { SubmittedSurvey } from "./SubmittedSurvey"

export function MovieSurveySection() {

    // useState input name/email/select movie/feedback
    const [inputName,setInputName] = useState("")
    const [inputEmail,setInputEmail] = useState("")
    const [selectMovie,setSelectMovie] = useState("")
    const [inputFeedback,setInputFeedback] = useState("")

    // useState error 
    const [errors,setErrors] = useState({})

    // ถ้าผ่าน ขึ้นกล่องข้อมูล (state)
    const [submmited,setSubmmited] = useState(false)

    // function update ค่า เมื่อกด submit 
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            setSubmmited(true)
        }
    }

    // function validate 
    // ถ้าไม่ผ่าน ขึ้นข้อความ error ใต้ input => ใช้ useState เพราะค่ามีการเปลี่ยนแปลงได้ => บรรทัด 12
    const validateForm = () => {
        let newErrors = {}
        let isValid = true
        if (!inputName) {
            newErrors.name = "โปรดใส่ชื่อของคุณ"
            isValid = false
        }
        if (!inputEmail) {
            newErrors.email = "โปรดใส่อีเมลของคุณ"
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(inputEmail)) {
            newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง"
            isValid = false
        }
        if (!selectMovie) {
            newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ"
            isValid = false
        }
        setErrors(newErrors);
        return isValid;
    }

    // function reset 
    const handleReset = () => {
        setInputName("")
        setInputEmail("")
        setSelectMovie("")
        setInputFeedback("")
        setErrors("")
        setSubmmited(false);
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-8">
                <div className="bg-purple-700 text-white text-2xl w-full max-w-lg font-semibold px-4 py-6 flex items-center">
                    <span className="mr-2">📋</span> Movie Survey
                </div>
                {/* Submmited */}
                <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg"> 
                    {submmited ? (
                        <SubmittedSurvey 
                        inputName={inputName} 
                        inputEmail={inputEmail} 
                        selectMovie={selectMovie} 
                        inputFeedback={inputFeedback} 
                        handleReset={handleReset} 
                    />
                    ) : (
                        <form className="px-4 space-y-4" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div>
                            <label className="block font-medium">ชื่อ *</label>
                                <input 
                                type="text" 
                                placeholder="กรุณากรอกชื่อของคุณ"
                                className="w-full mt-1 p-2 border rounded-md"
                                value={inputName}
                                onChange={(event) => setInputName(event.target.value)}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        {/* Email input */}
                        <div>
                            <label className="block font-medium">อีเมล *</label>
                                <input 
                                type="text" 
                                placeholder="example@email.com"
                                className="w-full mt-1 p-2 border rounded-md"
                                value={inputEmail}
                                onChange={(event) => setInputEmail(event.target.value)}
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        {/* Movie selection */}

                        <OptionalMovies selectMovie={selectMovie} setSelectMovie={setSelectMovie} errors={errors} />
                        
                        {/* Feedback input */}
                        <div>
                            <label >ความคิดเห็นเกี่ยวกับหนัง</label>
                            <textarea 
                                placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                                className="w-full mt-1 p-2 border rounded-md h-20"
                                value={inputFeedback}
                                onChange={(event) => setInputFeedback(event.target.value)}
                                ></textarea>
                        </div>
                        {/* Button */}
                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="reset-button px-4 py-2 text-black rounded-md border-1 border-gray-300 cursor-pointer"
                                onClick={handleReset}
                            >
                                🔄 รีเซ็ต
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-purple-700 text-white rounded-md cursor-pointer"
                            >
                                📤 ส่งแบบสำรวจ
                            </button>
                        </div>
                    </form>
                    )}
                    
                </div>
            </div>
        </>
    )
}
