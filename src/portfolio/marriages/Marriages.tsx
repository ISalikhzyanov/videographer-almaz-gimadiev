import nikahs1 from '../../assets/nikahs1.mp4'
import VideoCard from "../../components/video-card/VideoCard.tsx";
function Marriages() {
    return (
        <div className="container">
            <div className="d-flex flex-column">
                <VideoCard videoName="hahaha" videoSrc={nikahs1} />
            </div>
        </div>
    );
}

export default Marriages;
