import React, { FC } from "react";
import Image from "next/image";

interface ImageHandlerTypes {
  className: string;
  altImg: string;
  srcImage: string;
  ImageWidth: number;
  ImageHeight: number;
}

const ImageHandler: FC<ImageHandlerTypes> = ({
  className,
  altImg,
  srcImage,
  ImageWidth,
  ImageHeight,
}) => {
  return (
    <div>
      <Image
        src={srcImage}
        alt={altImg}
        width={ImageWidth}
        height={ImageHeight}
        className={className}
      />
    </div>
  );
};

export default ImageHandler;
