import "./index.css";
import pic2 from "@/assets/images/pic2.webp";
import _ from "lodash";

function Home(container) {
  const title = document.createElement("h1");
  title.textContent = "Welcome to Webpack Studio";
  container.appendChild(title);

  const button = document.createElement("button");
  button.textContent = "Click me to print";
  button.onclick = () => {
    import("@/utils/dateUtils")
      .then(({formatDateWithRelativeTime}) => {
        console.log(formatDateWithRelativeTime(new Date(2024, 9, 3)));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  container.appendChild(button);

  _.times(5, (i) => {
    const p = document.createElement("p");
    p.textContent = `This is paragraph ${i}`;
    container.appendChild(p);
  });

  const img = document.createElement("img");
  img.src = pic2;
  container.appendChild(img);
}

export default Home;
