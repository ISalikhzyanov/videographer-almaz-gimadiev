import {Modal} from "antd";

interface VideoModalProps {
    title: string;
    isOpen: boolean;
    onOk: () => void;
    onCancel: () => void;
}

function VideoModal(props: VideoModalProps) {
    return (
        <Modal title={props.title} open={props.isOpen} onCancel={props.onCancel} onOk={props.onOk}>
            <iframe width="100%" height="auto" src="https://rutube.ru/play/embed/9a2aba3bef7a00061736ee5347c07ce0/"
                    frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen
                    allowFullScreen></iframe>
        </Modal>
    );
}

export default VideoModal;