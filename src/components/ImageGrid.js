import React from "react";
import "./ImageGrid.css";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iYKSe_wy-0ypMjRU_UKnsSCCmWNN_KUJsA&s", // 替换为真实图片地址
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sBjg6NE2SKLca7EfVgGKLYv3EIjxRfPmSg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnVJZ1tdlZRpIrbMHqZgOuFku4bjKRSMTrVSF3VbzkXWMNnyk-TTzq3oSqTGY3Ck_vIo&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcl8yFEPm7MpqgmJjilNbja8BsPF1w1QBKjSTKzzCh6l93wPGx3fl6XF9_ucvt85OHaY&usqp=CAU",
  "https://www.investopedia.com/thmb/MbZeDTynBSqRVhD4EP4R1EELJKA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1503239849-0dc8617d35594774b51c998694997431.jpg",
  "https://imageio.forbes.com/specials-images/imageserve/66bcb02d4b0426780199c445/An-increasing-arrow-that-represents-the-best-undervalued-stocks-rising-in-value-/1960x0.jpg?format=jpg&width=960",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQck73zIIUftE2JoMWcCvJxTGvNBDeE8HZjiQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Ab6Ii0Vr2xlYHdE0SPxuanxEBY7bYK0gtD3JW_MMH80egwDiO7jeSDVkf6NiExyy6qo&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6t2ODKvlwt0Jr3dBOpWOm4SZBGDb-wS3V2OY1t7P2z63W196dj-nC6HC9cgAmDKrMLYo&usqp=CAU",
];

export default function ImageGrid() {
  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <div key={index} className="image-item">
          <img src={src} alt={`Grid item ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
