import { scarecrow } from "./Scarecrow.png";

const Image = () => {
    return (
      <div className="flex justify-center">
        <img src={scarecrow} alt="404-scarecrow" className="w-1/2 md:w-1/2 mx-auto" />
      </div>
    );
  };
  
  export default Image;
  