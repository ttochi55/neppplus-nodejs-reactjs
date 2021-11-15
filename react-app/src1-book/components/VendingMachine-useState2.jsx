import { useState } from "react";

const VendingMachine = () => {
  // 1. 코인 버튼 출력 (배열로 구현)
  const coins = [100, 500, 1000, 5000];
  const [nowCoin, setNowCoin] = useState(0);

  // 2. 코인 버튼을 클릭하면 현재 코인이 누른 코인만큼 증가
  const insertCoin = (coin) => {
    setNowCoin(nowCoin + coin);
  };

  // 3. 거스름돈 반환 버튼 클릭 시 현재 코인이 0
  const reset = () => setNowCoin(0);

  // 4. 음료수 리스트를 객체로 프린트 ({ id:1, name: "물", price: 1000 })
  const [drinkList, setDrinkList] = useState([
    { id: 1, name: "물", price: 1000 },
    { id: 2, name: "스프라이트", price: 2700 },
    { id: 3, name: "코카콜라", price: 1700 },
    { id: 4, name: "사이다", price: 1500 },
  ]);

  const buy = (price) => {
    // 6. 음료수 구매 전에 confirm 함수로 확인
    if (!window.confirm("구매 하시겠습니까?")) {
      return;
    }

    // 7. 현재코인보다 음료수 가격이 비싸면 구매 불가능
    if (nowCoin < price) {
      return alert("돈이 부족 합니다.");
    }

    // 5. 음료수 더블클릭하면 가격만큼 현재코인 차감
    setNowCoin(nowCoin - price);
  };

  const deleteDrink = (id) => {
    // const newDrinkList = drinkList.filter((drink) => drink.id !== id);
    // setDrinkList(newDrinkList);
    setDrinkList((prev) => prev.filter((drink) => drink.id !== id));
  };

  return (
    <>
      <h1>현재 코인: {nowCoin}</h1>

      {coins.map((coin) => (
        <button onClick={() => insertCoin(coin)}>{coin}원</button>
      ))}

      <br />
      <button onClick={reset}>거스름돈 반환</button>

      <br />
      <ul>
        {drinkList.map(({ id, name, price }) => (
          <li key={id} onDoubleClick={() => buy(price)}>
            {name} : {price}
            <button onClick={() => deleteDrink(id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default VendingMachine;
