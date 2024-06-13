import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const BASE_URL = "http://localhost:9000";

function Foodcourt({datas,setdatas,setfiltersearch}) {
    
    const [error, seterror] = useState(null);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const foodData = async () => {
            setloading(true);
            try {
                const response = await fetch(BASE_URL);
                const json = await response.json();
                setdatas(json);
                setfiltersearch(json)
                setloading(false);
            } catch (error) {
                seterror("this is error");
            }
        };
        foodData();
    }, []);


    if (error) return <div>{error}</div>;
    if (loading)


        return (
            <Loader>
                <img src="loader.gif" alt="" />
            </Loader>
        );

    return (
        <FoodConatiner>
            <FoodCards>
                {datas?.map((data) => (
                    <Foodcard key={data.name}>
                        <div className="foodimg">
                            <img src={BASE_URL + data.image} alt="" />
                        </div>
                        <div className="foodinfo">
                            <div className="info">
                                <h3>{data.name}</h3>
                                <p>{data.text}</p>
                            </div>
                            <button className="button">{data.price.toFixed(2)}</button>
                        </div>
                    </Foodcard>
                ))}
            </FoodCards>
        </FoodConatiner>
    );
}

export default Foodcourt;

const FoodConatiner = styled.section`
  background-image: url("/bg.png");
  min-height: calc(100vh - 150px);
  background-size: cover;
`;

const Loader = styled.div`
  text-align: center;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1408px;
  margin: auto;
  padding-top: 40px;
  justify-content: center;
  row-gap: 32px;
  column-gap: 20px;
`;
const Foodcard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .button {
    background-color: #ff4343;
    outline: none;
    border: none;
    padding: 6px 12px;
    color: white;
    border-radius: 5px;
    gap: 12px;
  }
`;
