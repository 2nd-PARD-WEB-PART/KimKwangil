import axios from "axios";

const ImageUpload = () => {
    const handleFileUpload = (event) => {
        const formData = new FormData();
        formData.append("image", event.target.files[0]);

        axios
            .post("http://3.35.236.83/image", formData)
            .then((response) => {
                console.log("이미지가 성공적으로 업로드되었습니다:", response.data);
                
                // 서버에서의 응답을 처리합니다.
            })
            .catch((error) => {
                console.error("이미지 업로드 중 오류 발생:", error);
                // 오류를 처리합니다.
            });
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileUpload} />
        </div>
    );
};

export default ImageUpload;