import VideoModal from "../video-madal/VideoModal.tsx";
import {useState} from "react";

interface IVideoCardProps {
    link: string;
    title: string;
    previewImage: string;
}
function VideoCard({ link, previewImage,title }: IVideoCardProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    function handleVideoNameClick(){
        setIsModalOpen(true)
    }

    function handleModalColse(){
        setIsModalOpen(false)
    }
    return (
        <div className="d-flex flex-column" style={{height: '200px', width: '100%'}}>
            <img src={previewImage} alt={previewImage}/>
            <span onClick={handleVideoNameClick}>{title}</span>
            <VideoModal title={title} isOpen={isModalOpen} link={link} onOk={handleModalColse} onCancel={handleModalColse} />
        </div>
    );
}

export default VideoCard;
