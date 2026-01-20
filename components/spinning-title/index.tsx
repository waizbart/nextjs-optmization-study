export default function SpinningTitle() {
    return (
        <h1 className="text-4xl">
            <span className="group hover:cursor-progress">
                Hello{" "}
                <span className="text-blue-500 transition-transform duration-700 ease-in-out group-hover:animate-spin inline-block">
                    NextJS Optimization Study
                </span>{" "}
                World
            </span>
        </h1>
    );
}