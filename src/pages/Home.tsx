export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "start",
        background: "white",
        position: "relative",
        // top: "5rem",
        alignItems: "center"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          background: "white",
          marginBottom: "0",
          padding: "2rem"
        }}
      >
        Manoj's Shopping Cart
      </h1>
      <img
        src="/public/imgs/shopping-cart.jpg"
        style={{
          display: "block",
          width: "50rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3rem"
        }}
      />
    </div>
  );
}
