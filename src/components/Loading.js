import { ThreeDots } from "react-loader-spinner";

export function Loading() {
    return (
        <ThreeDots 
            height="10" 
            width="50" 
            radius="10"
            color="#FFFFFF" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    );
}