import VideoModal from "../video-madal/VideoModal.tsx";
import {useState} from "react";

interface IVideoCardProps {
    videoName: string;
}
function VideoCard({videoName}: IVideoCardProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    function handleVideoNameClick(){
        setIsModalOpen(true)
    }

    function handleModalColse(){
        setIsModalOpen(false)
    }
    return (
        <div className="d-flex flex-column" style={{height: '200px', width: '100%'}}>
            <video src="https://drive.google.com/thumbnail?id=12sik4-A5q7y_0TuBoOOTYHhgeBhFl_2s&sz=w1000" height="100%" width="100%" controls>
            </video>
            <img alt=""/>
            <span onClick={handleVideoNameClick}>{videoName}</span>
            <VideoModal title='hahahah' isOpen={isModalOpen} onOk={handleModalColse} onCancel={handleModalColse} />
        </div>
    );
}

export default VideoCard;
