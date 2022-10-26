import React from "react";
import "./App.css";
import axios from "axios";

import { Routes, Route, useNavigate } from "react-router-dom";

function 상품정보(props) {
  const { item, 모달창열기, 상품액션, 버튼 } = props;

  return (
    <div>
      <div className="item">
        <div className="item-block">
          <div className="image-area">
            <img
              onClick={모달창열기.bind(this, item)}
              src={item.image}
              alt="상품이미지"
              className="image"
            />
          </div>
          <div className="name">{item.name}</div>
          <div className="description">{item.descrition}</div>
          <div className="bottom-area">
            <div className="price">{item.price}</div>
            <div className="button" onClick={상품액션.bind(this, item)}>
              <버튼 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [products, setProducts] = React.useState([
    {
      name: "Nike CruzrOne",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
      descrition:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: "20000",
    },
    {
      name: "Nike Epic React Flyknit 2",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png",
      descrition:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: "20000",
    },
  ]);

  const [myCart, setMyCart] = React.useState([]);

  const [showModal, setShowModal] = React.useState({
    show: false,
    image: null,
  });

  React.useEffect(() => {
    window.addEventListener("click", (event) => {
      if (event.target.className === "modal-bg") {
        const cloneShowModal = { ...showModal };
        cloneShowModal.show = false;
        cloneShowModal.image = null;
        setShowModal(cloneShowModal);
      }
    });
  }, []);

  const 총금액 = React.useMemo(() => {
    let 금액 = 0;
    myCart.forEach((item, index) => {
      금액 += parseInt(item.price);
    });
    return 금액;
  }, [myCart]);

  const 서버에있는장바구니가져오기 = () => {
    axios({
      url: "http://localhost:4000/myCart",
    })
      .then((Response) => {
        const cloneMyCart = [...Response.data];
        setMyCart(cloneMyCart);
      })
      .catch((e) => {
        console.log("네트워크 요청 에러", e);
      });
  };

  React.useEffect(() => {
    서버에있는장바구니가져오기();
  }, []);

  const 모달창열기 = (item) => {
    const cloneShowModal = { ...showModal };
    cloneShowModal.show = true;
    cloneShowModal.image = item.image;
    setShowModal(cloneShowModal);
  };

  const 상품장바구니담기 = async (item) => {
    const cloneMyCart = [...myCart];

    const 이미갖고있는상품 = cloneMyCart.find((myItem) => {
      return myItem.name === item.name;
    });

    if (이미갖고있는상품) {
      alert("이미 갖고 있습니다.");
      return;
    }

    await axios({
      method: "get",
      url: "http://127.0.0.1:4000/add/cart",
      dataType: "json",
      params: item,
    })
      .then((res) => {})
      .catch((e) => {
        console.log(e);
      });

    cloneMyCart.push(item);
    setMyCart(cloneMyCart);
  };

  const 상품장바구니비우기 = async (item) => {
    await axios({
      url: "http://localhost:4000/delete/cart",
      method: "get",
      dataType: "json",
      params: item,
    })
      .then((res) => {
        const cloneMyCart = [...res.data];
        setMyCart(cloneMyCart);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="screen -left">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/pngwave.png"
            className="logo"
            alt="로고"
          />
          <div className="title">Picked items</div>
          <div className="shop-items">
            {products &&
              products.map((item, index) => {
                return (
                  <상품정보
                    key={`product-${index}`}
                    item={item}
                    모달창열기={모달창열기}
                    상품액션={상품장바구니담기}
                    버튼={() => {
                      return <p>ADD TO CART</p>;
                    }}
                  />
                );
              })}
          </div>
        </div>

        <div className="screen -right">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/pngwave.png"
            className="logo"
            alt="로고"
          />
          <div className="title">Your Cart</div>
          <div className="shop-items">
            {myCart ? (
              myCart.map((item, index) => {
                return (
                  <상품정보
                    key={`myCart-${index}`}
                    모달창열기={모달창열기}
                    item={item}
                    상품액션={상품장바구니비우기}
                    버튼={() => {
                      return <p style={{ color: "red" }}>DELETE</p>;
                    }}
                  />
                );
              })
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 300,
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                없습니다.
              </div>
            )}
          </div>
        </div>
      </div>

      {showModal.show && (
        <>
          <div className="modal-bg" />
          <div className="modal">
            <img src={showModal.image} alt="확대사진" />
          </div>
        </>
      )}
      <div class="totalCost">totalCost:{총금액}</div>
    </div>
  );
}

function Main() {
  const { loginUser } = React.useContext(StoreContext);
  console.log(loginUser);
  return <div>메인페이지</div>;
}

function Sub() {
  const navigation = useNavigate();
  const { loginUser } = React.useContext(StoreContext);
  return (
    <div>
      서브페이지{" "}
      <div
        onClick={() => {
          navigation("/");
        }}
      >
        메인페이지로 이동
      </div>
    </div>
  );
}

const StoreContext = React.createContext({});

function Test() {
  const [loginUser, setLoginUser] = React.useState({
    id: "asd123",
    name: "성민",
    age: 12,
  });
  return (
    <StoreContext.Provider
      value={{
        loginUser,
      }}
    >
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/sub" element={<Sub />} />
      </Routes>
    </StoreContext.Provider>
  );
}

export default Test;
