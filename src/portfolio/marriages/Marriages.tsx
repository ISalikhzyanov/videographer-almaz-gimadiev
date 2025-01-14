import VideoCard from "../../components/video-card/VideoCard.tsx";
import {marriagesVideos} from "./marriagesConstants.ts";
function Marriages() {
    return (
        <div className="container">
            <div className="d-flex flex-column">
                {
                    marriagesVideos.map((item) =>
                        <VideoCard
                            key={item.key}
                            previewImage={item.previewImage}
                            title={item.title}
                            link={item.link}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Marriages;
