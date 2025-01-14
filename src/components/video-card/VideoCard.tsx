interface IVideoCardProps {
    videoName: string;
    videoSrc: string;
}
function VideoCard({videoName, videoSrc}: IVideoCardProps) {
    return (
        <div className="d-flex flex-column" style={{height: '200px', width: '100%'}}>
            <video src="https://drive.google.com/thumbnail?id=12sik4-A5q7y_0TuBoOOTYHhgeBhFl_2s&sz=w1000" height="100%" width="100%" controls>
            </video>
            <img alt=""/>
            <span>{videoName}</span>
        </div>
    );
}

export default VideoCard;
