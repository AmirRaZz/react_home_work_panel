import { ThreeDots } from "react-loader-spinner";

const Loading = ({ width = "75", height = "40" }) => {
    return (
        <ThreeDots
            height={height}
            width={width}
            radius="9"
            color="blue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                display: "flex",
                justifyContent: "center",
            }}
            visible={true}
        />
    );
};

export default Loading;
